"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_service_1 = require("../country.service");
var Page1Component = /** @class */ (function () {
    function Page1Component(countryService) {
        this.countryService = countryService;
        this.countries = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (country) {
            _this.countries = country;
        });
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: 'ns-page1',
            templateUrl: './page1.component.html',
            styleUrls: ['./page1.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [country_service_1.CountryService])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
