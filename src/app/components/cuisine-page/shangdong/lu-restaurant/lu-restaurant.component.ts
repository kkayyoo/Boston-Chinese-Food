import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-lu-restaurant',
  templateUrl: './lu-restaurant.component.html',
  styleUrls: ['./lu-restaurant.component.scss']
})
export class LuRestaurantComponent implements OnInit {

  restaurantLu: Restaurant[] = [
    new Restaurant('Golden Garden', '/restaurant/12', '../../../../assets/images/restaurants/malden/goldengarden/golden.png'),
    new Restaurant('Go Chi', '/restaurant/10', '../../../../assets/images/restaurants/malden/gochi/gochi.png'),
    new Restaurant('FuLoon Restaurant', '/restaurant/5', '../../../../assets/images/restaurants/malden/fuloon/fuloon.png'),
    new Restaurant('Qing Dao Garden', '/restaurant/15', '../../../../assets/images/restaurants/cambridge/qingdaogarden/qingdao.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
