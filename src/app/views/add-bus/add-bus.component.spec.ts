import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AddBusComponent } from "./add-bus.component";

describe("AddBusComponent", () => {
  let component: AddBusComponent;
  let fixture: ComponentFixture<AddBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddBusComponent],
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
    fixture = TestBed.createComponent(AddBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // Form validations tests
  it("form should be invalid", async(() => {
    const fixture = TestBed.createComponent(AddBusComponent);
    const addBusComponent = fixture.debugElement.componentInstance;
    addBusComponent.addBusForm.controls["plateNumber"].setValue("");
    addBusComponent.addBusForm.controls["busType"].setValue("");
    addBusComponent.addBusForm.controls["station"].setValue("");
    expect(addBusComponent.addBusForm.valid).toBeFalsy();
  }));

  it("form should be valid", async(() => {
    const fixture = TestBed.createComponent(AddBusComponent);
    const addBusComponent = fixture.debugElement.componentInstance;
    addBusComponent.addBusForm.controls["plateNumber"].setValue("BUS-567-123");
    addBusComponent.addBusForm.controls["busType"].setValue("Regular");
    addBusComponent.addBusForm.controls["station"].setValue("Lehel");
    expect(addBusComponent.addBusForm.valid).toBeTruthy();
  }));
});
