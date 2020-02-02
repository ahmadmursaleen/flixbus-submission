import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { Bus } from "./bus";
import { Station } from "./station";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class FlixbusCharterService {
  //Creating Observales to store bus and station objects
  bus: Observable<Bus>;
  station: Observable<Station>;

  //Http client is to access the Rest api. In this constructor, it is injected as a dependancy
  constructor(private http: HttpClient) {}

  // Fucntionality to access the bus lists
  busListSearch: Function = (): Observable<Bus> => {
    this.bus = this.http.get<Bus>("http://localhost:3000/buses", httpOptions);
    return this.bus;
  };

  // Fucntionality to access the station lists
  stationListSearch: Function = (): Observable<Station> => {
    this.station = this.http.get<Station>(
      "http://localhost:3000/stations",
      httpOptions
    );
    return this.station;
  };

  //Adding a new bus
  newBus: Function = (
    plate: string,
    busType: string,
    stationId: number,
    stationItem: Station
  ): Observable<Bus> => {
    this.bus = this.http.post<Bus>(
      "http://localhost:3000/buses",
      {
        plate: plate,
        type: busType,
        stationid: stationId
      },
      httpOptions
    );
    return this.bus;
  };

  //changing a slot from free to occupied when a new bus is added
  modifyStation_free_to_occup: Function = (
    stationId: number,
    stationItem: Station
  ): Observable<Station> => {
    for (let key in stationItem.slots) {
      if (stationItem.slots[key] == false) {
        stationItem.slots[key] = true;
        break;
      }
    }
    this.station = this.http.put<Station>(
      `http://localhost:3000/stations/${stationId}`,
      {
        item_text: stationItem.item_text,
        slots: stationItem.slots
      },
      httpOptions
    );
    return this.station;
  };

  //Getting a specific station details
  getStation: Function = (stationId: number): Observable<Station> => {
    this.station = this.http.get<Station>(
      `http://localhost:3000/stations/${stationId}`,
      httpOptions
    );
    return this.station;
  };

  //changing a slot from occupied to free when a bus is deleted
  modifyStation_occup_to_free: Function = (
    stationId: number,
    stationItem: Station
  ): Observable<Station> => {
    for (let key in stationItem.slots) {
      if (stationItem.slots[key] == true) {
        stationItem.slots[key] = false;
        break;
      }
    }
    this.station = this.http.put<Station>(
      `http://localhost:3000/stations/${stationId}`,
      {
        item_text: stationItem.item_text,
        slots: stationItem.slots
      },
      httpOptions
    );
    return this.station;
  };

  //deleting a bus from the dashboard
  deleteBus: Function = (
    busId: number,
    stattionId: number
  ): Observable<Bus> => {
    this.bus = this.http.delete<Bus>(
      `http://localhost:3000/buses/${busId}`,
      httpOptions
    );
    return this.bus;
  };

  //Adding/removing a free slot to a specific station
  slotChange: Function = (
    stationId: number,
    stationItem: Station
  ): Observable<Station> => {
    this.station = this.http.put<Station>(
      `http://localhost:3000/stations/${stationId}`,
      {
        item_text: stationItem.item_text,
        slots: stationItem.slots
      },
      httpOptions
    );
    return this.station;
  };

  //Functionality to add a new station
  newStation: Function = (
    name: string,
    slots: boolean[]
  ): Observable<Station> => {
    this.station = this.http.post<Station>(
      "http://localhost:3000/stations",
      {
        item_text: name,
        slots: slots
      },
      httpOptions
    );
    return this.station;
  };
}
