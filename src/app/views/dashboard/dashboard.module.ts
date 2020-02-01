import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { NgxPaginationModule } from "ngx-pagination";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from "@angular/common";
import { BusNumberPipe } from "../../bus-number.pipe";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { BusTypePipe } from "../../bus-type.pipe";
import { StationPipe } from "../../station.pipe";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule,
    MatDialogModule
  ],
  declarations: [DashboardComponent, BusNumberPipe, BusTypePipe, StationPipe]
})
export class DashboardModule {}
