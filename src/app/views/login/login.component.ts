import { Component, OnInit } from "@angular/core";
import { FirebaseAuthenitcationService } from "../../firebase-authenitcation.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public authService: FirebaseAuthenitcationService) {}

  ngOnInit() {}
}
