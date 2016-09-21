import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./app/home";
import { AboutComponent } from "./app/about";

const routes: Routes = [
  { path: "",      component: HomeComponent},
  { path: "about", component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
