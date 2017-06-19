import { Component, OnInit } from '@angular/core';
import { RestaurantDetail } from './restaurants.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {
  selectedRestaurant: RestaurantDetail;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurantSelected
      .subscribe(
          (restaurant: RestaurantDetail) => {
              this.selectedRestaurant = restaurant;
          }
      );
  }

}
