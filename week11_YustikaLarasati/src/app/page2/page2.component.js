"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var country_service_1 = require("../country.service");
var weather_service_1 = require("../weather.service");
var Page2Component = /** @class */ (function () {
    function Page2Component(route, cs, ws) {
        this.route = route;
        this.cs = cs;
        this.ws = ws;
        this.countryName = null;
        this.country = null;
        this.weather = null;
    }

    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (element) {
            _this.countryName = element.get("countryName");
            console.log(_this.countryName);
            _this.cs.getCountry(_this.countryName).subscribe(function (country) {
                _this.country = country;
                _this.ws.getWeather(country["CapitalLatitude"], country["CapitalLongitude"]).subscribe(function (weather) {
                    _this.weather = weather;
                    console.log(weather);
                });
            });
        });
    };

    Page2Component = __decorate([
        core_1.Component({
            selector: 'ns-page2',
            templateUrl: './page2.component.html',
            styleUrls: ['./page2.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, country_service_1.CountryService, weather_service_1.WeatherService])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;