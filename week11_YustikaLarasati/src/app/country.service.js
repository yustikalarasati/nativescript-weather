"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var CountryService = /** @class */ (function () 
{
    function CountryService(http) 
    {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () 
    {
        return this.http.get("~/assets/country-capitals.json");
    };
    CountryService.prototype.getCountry = function (name) 
    {
        console.log(name);
        return this.http.get("~/assets/country-capitals.json").pipe(operators_1.flatMap(function (response) { return response; }), operators_1.filter(function (res) { return res["CountryName"] === name; }));
    };
    CountryService = __decorate
    ([
        core_1.Injectable
        ({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;