"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var WeatherService = /** @class */ (function () 
{
    function WeatherService(http) 
    {
        this.http = http;
        this.apiKey = "5f1ea22a92e9fd7de17d44976ec4252a";
        this.baseUrl = "https://api.darksky.net/forecast/" + this.apiKey + "/";
    }

    WeatherService.prototype.getWeather = function (lat, lng) 
    {
        var url = "" + this.baseUrl + lat + "," + lng + "?units=si&exclude=minutely,hourly,flags,alert";
        return this.http.get(url);
    };

    WeatherService = __decorate
    ([
        core_1.Injectable
        ({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;