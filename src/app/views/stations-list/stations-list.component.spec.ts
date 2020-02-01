import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StationsListComponent } from "./stations-list.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NgxPaginationModule } from "ngx-pagination";

describe("StationsListComponent", () => {
  let component: StationsListComponent;
  let fixture: ComponentFixture<StationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StationsListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxPaginationModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have 12 pages per items in the station list", async(() => {
    const fixture = TestBed.createComponent(StationsListComponent);
    const stationsListComponent = fixture.debugElement.componentInstance;
    expect(stationsListComponent.perPageItems).toBe(12);
  }));
  it("should have the first page loaded in the pagination pipe in station list", async(() => {
    const fixture = TestBed.createComponent(StationsListComponent);
    const stationsListComponent = fixture.debugElement.componentInstance;
    expect(stationsListComponent.p).toBe(1);
  }));
});
