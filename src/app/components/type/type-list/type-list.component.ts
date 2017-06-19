import { Component, OnInit } from '@angular/core';
import { Cities } from '../cities.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cityList: Cities[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityList = this.cityService.getCities();
  }


}
