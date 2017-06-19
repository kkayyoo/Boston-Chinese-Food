import { Component, OnInit, Input } from '@angular/core';

import { Cities } from '../../cities.model';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {
  @Input() city: Cities;
  @Input() index: number;

  ngOnInit() {
  }

}
