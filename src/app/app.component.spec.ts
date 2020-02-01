import { RouterTestingModule } from "@angular/router/testing";
import { TestBed, async, inject } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { DashboardModule } from "./views/dashboard/dashboard.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FlixbusCharterService } from "./flixbus-charter.service";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, DashboardModule, HttpClientTestingModule]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("should create the dashboard component", async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboardComponent = fixture.debugElement.componentInstance;
    expect(dashboardComponent).toBeTruthy();
  }));
  it("should have 12 pages per items in the dashboard", async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboardComponent = fixture.debugElement.componentInstance;
    expect(dashboardComponent.perPageItems).toBe(12);
  }));
  it("should have the first page loaded in the pagination pipe", async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboardComponent = fixture.debugElement.componentInstance;
    expect(dashboardComponent.p).toBe(1);
  }));
  it("should have the search field for plate number empty", async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboardComponent = fixture.debugElement.componentInstance;
    expect(dashboardComponent.searchPlateNumber).toBe("");
  }));
  it("should have 4 types of buses in the bus selector", async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboardComponent = fixture.debugElement.componentInstance;
    expect(dashboardComponent.busTypeSelectData.length).toBe(4);
  }));
  it("should have no bus type selected on page load", async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboardComponent = fixture.debugElement.componentInstance;
    expect(dashboardComponent.selectedBusTypes.length).toBe(0);
  }));

  // Test Cases wrtitten to test the asynchronous communication with the flixbus-charter service
  it("should return a list of buses", async(
    inject([FlixbusCharterService], (service: FlixbusCharterService) => {
      service.busListSearch().subscribe(response => {
        expect(response).toBeTruthy();
      });
    })
  ));
});
