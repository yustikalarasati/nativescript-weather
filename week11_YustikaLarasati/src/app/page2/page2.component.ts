import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../country.service";
import { WeatherService } from "../weather.service";

@Component({
  selector: 'ns-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  moduleId: module.id,
})
export class Page2Component implements OnInit {
  countryName: string = null;
  country = null;
  weather = null;

  constructor(private route: ActivatedRoute, private cs: CountryService, private ws: WeatherService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(element => {
      this.countryName = element.get("countryName");
      console.log(this.countryName);

      this.cs.getCountry(this.countryName).subscribe(country => {
        this.country = country;

        this.ws.getWeather(country["CapitalLatitude"], country["CapitalLongitude"]).subscribe(weather => {
          this.weather = weather;
          console.log(weather);
        });
      });
    });
  }
}
