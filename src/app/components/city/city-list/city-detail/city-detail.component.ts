import { Component, OnInit, Input } from '@angular/core';

import { Cities } from '../../cities.model';
import { CityService } from '../../city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {
  @Input() city: Cities;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  onSelected() {
    this.cityService.citySelected.emit(this.city);
  }

}
