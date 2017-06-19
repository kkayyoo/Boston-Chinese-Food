import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Cities } from '../cities.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityItemComponent implements OnInit {
  city: Cities;
  id: number;

  constructor(private cityService: CityService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.city = this.cityService.getCity(this.id);
          }
        );
  }

}
