import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { RouterTestingModule } from "@angular/router/testing";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBcuGd_rP50iu-t4suYZL3ouzkahobBjtc",
  authDomain: "flixbus-5a7b4.firebaseapp.com",
  databaseURL: "https://flixbus-5a7b4.firebaseio.com",
  projectId: "flixbus-5a7b4",
  storageBucket: "flixbus-5a7b4.appspot.com",
  messagingSenderId: "124843802573",
  appId: "1:124843802573:web:bed9716daed1c08f3bce84"
};

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
