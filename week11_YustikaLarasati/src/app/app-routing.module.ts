import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";

const routes: Routes = [
    { path: "", redirectTo: "/page1", pathMatch: "full" },
    { path: "page1", component: Page1Component },
    { path: "page2/:countryName", component: Page2Component }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
