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
}
