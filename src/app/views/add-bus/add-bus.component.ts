import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { FlixbusCharterService } from "../../flixbus-charter.service";
import { Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Station } from "../../station";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-bus",
  templateUrl: "./add-bus.component.html",
  styleUrls: ["./add-bus.component.scss"]
})
export class AddBusComponent implements OnInit {
  // Instantiating a reactive form
  addBusForm = this.fb.group({
    plateNumber: [
      "",
      [
        Validators.required,
        Validators.pattern("BUS-[0-9][0-9][0-9]-[0-9][0-9][0-9]$")
      ]
    ],
    busType: ["", Validators.required],
    station: ["", Validators.required]
  });

  // subscription is used to subscribe to an obervable to access async data
  _subscription: Subscription;

  // Array to store station list
  stations = [];

  //This boolean toggler is used to indicate when a station is full and no further slots are available
  formToggler: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddBusComponent>,
    private flixbusCharter: FlixbusCharterService,
    private fb: FormBuilder
  ) {}

  //to close the open dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this._subscription = this.flixbusCharter
      .stationListSearch()
      .subscribe(response => {
        this.stations = response;
      });
  }
  onSubmit() {
    //Fucntionality to extract the selected station
    let selectedStation: Station;
    for (let key in this.stations) {
      if (this.stations[key].id == this.addBusForm.value.station) {
        selectedStation = this.stations[key];
      }
    }

    // Checking if a free slot is available or not
    let val = 0;
    for (let key in selectedStation.slots) {
      if (selectedStation.slots[key] == false) {
        val = 1;
      }
    }

    // If all slots are occupied then display a warning otherwise insert a new bus
    if (val == 0) {
      this.formToggler = true;
    } else if (val == 1) {
      this.formToggler = true;

      //Adding a new bus
      this._subscription = this.flixbusCharter
        .newBus(
          this.addBusForm.value.plateNumber,
          this.addBusForm.value.busType,
          this.addBusForm.value.station,
          selectedStation
        )
        .subscribe(response => {});

      //modifying the station slots as one more bus is added
      this._subscription = this.flixbusCharter
        .modifyStation_free_to_occup(
          this.addBusForm.value.station,
          selectedStation
        )
        .subscribe(response => {});

      this.onNoClick();
    }
  }
}
