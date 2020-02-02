import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddStationComponent } from "./add-station.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from "@angular/material/dialog";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
describe("AddStationComponent", () => {
  let component: AddStationComponent;
  let fixture: ComponentFixture<AddStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddStationComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
