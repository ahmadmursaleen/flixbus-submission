import { Component, OnInit } from "@angular/core";
import { Station } from "../../station";
import { Subscription } from "rxjs";
import { FlixbusCharterService } from "../../flixbus-charter.service";
import { AddStationComponent } from "../add-station/add-station.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-stations-list",
  templateUrl: "./stations-list.component.html",
  styleUrls: ["./stations-list.component.scss"]
})
export class StationsListComponent implements OnInit {
  // subscription is used to subscribe to an obervable to access async data
  _subscription: Subscription;

  stations: Station[];

  // Pagination related data
  p: number = 1;
  perPageItems: number = 12;

  constructor(
    private flixbusCharter: FlixbusCharterService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._subscription = this.flixbusCharter
      .stationListSearch()
      .subscribe(response => {
        this.stations = response;
      });
  }

  //Functionality to add and remove a slot from a specific station

  addSlot(station: Station) {
    station.slots.push(false);
    this._subscription = this.flixbusCharter
      .slotChange(station.id, station)
      .subscribe(response => {});
  }

  deleteSlot(station: Station) {
    for (let key in station.slots) {
      if (station.slots[key] == false) {
        station.slots.splice(parseInt(key), 1);
        break;
      }
    }
    this._subscription = this.flixbusCharter
      .slotChange(station.id, station)
      .subscribe(response => {});
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddStationComponent, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
