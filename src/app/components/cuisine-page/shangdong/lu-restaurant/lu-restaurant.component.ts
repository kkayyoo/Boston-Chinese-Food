import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-lu-restaurant',
  templateUrl: './lu-restaurant.component.html',
  styleUrls: ['./lu-restaurant.component.scss']
})
export class LuRestaurantComponent implements OnInit {

  restaurantLu: Restaurant[] = [
    new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
    new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
