import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-huai-restaurant',
  templateUrl: './huai-restaurant.component.html',
  styleUrls: ['./huai-restaurant.component.scss']
})
export class HuaiRestaurantComponent implements OnInit {

  restaurantHuai: Restaurant[] = [
    new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
    new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
