"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page1_component_1 = require("./page1/page1.component");
var page2_component_1 = require("./page2/page2.component");
var routes = 
[
    { 
        path: "", redirectTo: "/page1", pathMatch: "full" 
    },
    { 
        path: "page1", component: page1_component_1.Page1Component 
    },
    { 
        path: "page2/:countryName", component: page2_component_1.Page2Component 
    }
];

var AppRoutingModule = /** @class */ (function () 
{
    function AppRoutingModule() 
    {

    }
    AppRoutingModule = __decorate
    ([
        core_1.NgModule
        ({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;