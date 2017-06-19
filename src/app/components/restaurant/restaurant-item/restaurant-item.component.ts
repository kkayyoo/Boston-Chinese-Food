import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RestaurantDetail } from '../restaurants.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  restaurant: RestaurantDetail;
  id: number;
  //restaurantList: RestaurantDetail[] = [];

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.restaurant = this.restaurantService.getRestaurant(this.id);
          }
        );
  }
}
