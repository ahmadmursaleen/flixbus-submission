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
  // Test Cases wrtitten to test the asynchronous communication with the flixbus-charter service
  it("should return a list of buses", async(
    inject([FlixbusCharterService], (service: FlixbusCharterService) => {
      service.busListSearch().subscribe(response => {
        expect(response).toBeTruthy();
      });
    })
  ));
});
