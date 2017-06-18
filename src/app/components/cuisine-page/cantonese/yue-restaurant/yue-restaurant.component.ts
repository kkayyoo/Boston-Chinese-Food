import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-yue-restaurant',
  templateUrl: './yue-restaurant.component.html',
  styleUrls: ['./yue-restaurant.component.scss']
})
export class YueRestaurantComponent implements OnInit {

  restaurantYue: Restaurant[] = [
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC1 Food'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ1 Food'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC1 Food'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ1 Food')
  ];

  constructor() { }

  ngOnInit() {
  }

}
