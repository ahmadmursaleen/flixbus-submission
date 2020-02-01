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

  //Variables for pipes
  searchPlateNumber: string = "";

  //variables for multiple selection dropdowns - BUS TYPE
  busTypeSelectData = [
    { item_id: 1, item_text: "Regular" },
    { item_id: 2, item_text: "MiniBus" },
    { item_id: 3, item_text: "Hybrid" },
    { item_id: 4, item_text: "DoubleDecker" }
  ];
  selectedBusTypes = [];
  busSelectorSettings = {
    singleSelection: false,
    idField: "item_id",
    textField: "item_text",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  //variables for multiple selection dropdowns - STATION

  constructor(private flixbusCharter: FlixbusCharterService) {}
  ngOnInit(): void {
    this._subscription = this.flixbusCharter
      .busListSearch()
      .subscribe(response => {
        this.busListBackend = response;
        this.busListFrontend = response;
      });
    this.busTypeSelectData = [
      { item_id: 1, item_text: "Regular" },
      { item_id: 2, item_text: "MiniBus" },
      { item_id: 3, item_text: "Hybrid" },
      { item_id: 4, item_text: "DoubleDecker" }
    ];
  }

  //Event Handlers for multiple selection dropdowns - BUS TYPE
  onSelectAll(items: any) {
    this.busListFrontend = this.busListBackend;
  }

  ngOnDestroy(): void {
    // unsubscribing from an observable
    this._subscription.unsubscribe();
  }
}
