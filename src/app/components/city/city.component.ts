import { Component, OnInit } from '@angular/core';
import { Cities } from './cities.model';
import { CityService } from './city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [CityService]
})
export class CityComponent implements OnInit {
  selectedCity: Cities;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.citySelected
      .subscribe(
          (city: Cities) => {
              this.selectedCity = city;
          }
      );
  }

}
