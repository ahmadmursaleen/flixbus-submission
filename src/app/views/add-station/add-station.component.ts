import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators } from "@angular/forms";
import { FlixbusCharterService } from "../../flixbus-charter.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-add-station",
  templateUrl: "./add-station.component.html",
  styleUrls: ["./add-station.component.scss"]
})
export class AddStationComponent implements OnInit {
  _subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<AddStationComponent>,
    private fb: FormBuilder,
    private flixbusCharter: FlixbusCharterService
  ) {}

  addStationForm = this.fb.group({
    name: ["", [Validators.required, Validators.pattern("^[a-zA-Z_ ]+$")]],
    slots: ["", [Validators.required, Validators.pattern("^[1-9]+$")]]
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}

  onSubmit() {
    let slots: Boolean[] = [];
    for (let i = 1; i <= parseInt(this.addStationForm.value.slots); i = i + 1) {
      slots.push(false);
    }

    this._subscription = this.flixbusCharter
      .newStation(this.addStationForm.value.name, slots)
      .subscribe(response => {});
    this.dialogRef.close();
  }
}
