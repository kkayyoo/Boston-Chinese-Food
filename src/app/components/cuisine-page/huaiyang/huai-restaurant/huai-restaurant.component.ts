import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-huai-restaurant',
  templateUrl: './huai-restaurant.component.html',
  styleUrls: ['./huai-restaurant.component.scss']
})
export class HuaiRestaurantComponent implements OnInit {

  restaurantHuai: Restaurant[] = [
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food')
  ];

  constructor() { }

  ngOnInit() {
  }

}
