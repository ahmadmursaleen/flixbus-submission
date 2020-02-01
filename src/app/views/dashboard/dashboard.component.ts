import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Bus } from "../../bus";
import { FlixbusCharterService } from "../../flixbus-charter.service";

@Component({
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  // subscription is used to subscribe to an obervable to access async data
  _subscription: Subscription;

  busListFrontend: Bus[]; // This is variable as per DOM manipulation for filtering purposes
  busListBackend: Bus[]; // This always show the total number of buses present in the backend

  //Pagination related variables
  p: number = 1;
  perPageItems: number = 12;

  constructor(private flixbusCharter: FlixbusCharterService) {}
  ngOnInit(): void {
    this._subscription = this.flixbusCharter
      .busListSearch()
      .subscribe(response => {
        this.busListBackend = response;
        this.busListFrontend = response;
      });
  }

  ngOnDestroy(): void {
    // unsubscribing from an observable
    this._subscription.unsubscribe();
  }
}
