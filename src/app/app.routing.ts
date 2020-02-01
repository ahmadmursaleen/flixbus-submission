import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { LoginComponent } from "./views/login/login.component";
import { AdminGuard } from "./admin.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "dashboard",
        canActivate: [AdminGuard],
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
