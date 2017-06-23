import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-yue-restaurant',
  templateUrl: './yue-restaurant.component.html',
  styleUrls: ['./yue-restaurant.component.scss']
})
export class YueRestaurantComponent implements OnInit {

  restaurantYue: Restaurant[] = [
    new Restaurant('Hei La Moon', '/restaurant/46', '../../../../assets/images/restaurants/boston/heilamoon/heilamoon.png'),
    new Restaurant('Peach Farm', '/restaurant/43', '../../../../assets/images/restaurants/boston/peachfarm/peachfarm.png'),
    new Restaurant('Clay Pot Cafe', '/restaurant/41', '../../../../assets/images/restaurants/boston/claypot/claypot.png'),
    new Restaurant('Ming’s Seafood', '/restaurant/3', '../../../../assets/images/restaurants/malden/ming/ming.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
