import { Component, OnInit, Input } from '@angular/core';

import { Cities } from '../cities.model';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityItemComponent implements OnInit {
  @Input() city: Cities;

  constructor() { }

  ngOnInit() {
  }

}
