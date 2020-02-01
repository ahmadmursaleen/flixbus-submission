import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Bus } from "../../bus";
import { FlixbusCharterService } from "../../flixbus-charter.service";
import { AddBusComponent } from "../add-bus/add-bus.component";
import { MatDialog } from "@angular/material/dialog";
import { Station } from "../../station";

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
  stationSelectData = [];
  selectedStations = [];
  stationSelectorSettings = {
    singleSelection: false,
    idField: "id",
    textField: "item_text",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor(
    private flixbusCharter: FlixbusCharterService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this._subscription = this.flixbusCharter
      .busListSearch()
      .subscribe(response => {
        this.busListBackend = response;
        this.busListFrontend = response;
      });
    this._subscription = this.flixbusCharter
      .stationListSearch()
      .subscribe(response => {
        this.stationSelectData = response;
      });
  }

  //Event Handlers for multiple selection dropdowns - BUS TYPE
  onSelectAll(items: any) {
    this.busListFrontend = this.busListBackend;
  }

  // Dialog box for adding a new bus
  openDialog() {
    const dialogRef = this.dialog.open(AddBusComponent, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log("The dialog was closed");
      this.ngOnInit();
    });
  }

  //Functionality to delete a bus
  deleteBus(busID: number, stationID: number) {
    let station: Station;

    this._subscription = this.flixbusCharter
      .getStation(stationID)
      .subscribe(response => {
        station = response;

        this._subscription = this.flixbusCharter
          .modifyStation_occup_to_free(stationID, station)
          .subscribe(response => {});
      });

    this._subscription = this.flixbusCharter
      .deleteBus(busID, stationID)
      .subscribe(response => {
        this.ngOnInit();
      });
  }

  ngOnDestroy(): void {
    // unsubscribing from an observable
    this._subscription.unsubscribe();
  }
}
