import { Component, OnInit } from "@angular/core";
import { Station } from "../../station";
import { Subscription } from "rxjs";
import { FlixbusCharterService } from "../../flixbus-charter.service";

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

  constructor(private flixbusCharter: FlixbusCharterService) {}

  ngOnInit() {
    this._subscription = this.flixbusCharter
      .stationListSearch()
      .subscribe(response => {
        this.stations = response;
      });
  }
}
