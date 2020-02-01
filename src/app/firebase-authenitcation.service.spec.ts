import { TestBed } from "@angular/core/testing";

import { FirebaseAuthenitcationService } from "./firebase-authenitcation.service";
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

describe("FirebaseAuthenitcationService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterTestingModule
      ]
    })
  );

  it("should be created", () => {
    const service: FirebaseAuthenitcationService = TestBed.get(
      FirebaseAuthenitcationService
    );
    expect(service).toBeTruthy();
  });
});
