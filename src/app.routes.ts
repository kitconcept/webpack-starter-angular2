import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Home } from "./app/home";
import { About } from "./app/about";

const routes: Routes = [
  { path: "",      component: Home},
  { path: "about", component: About}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
