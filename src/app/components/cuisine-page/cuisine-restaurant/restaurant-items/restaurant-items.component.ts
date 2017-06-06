import { Component, OnInit } from '@angular/core';
import { CuisineRestaurants } from '../cuisine-restaurants.model';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.scss']
})
export class RestaurantItemsComponent implements OnInit {
  restaurantList: CuisineRestaurants[] = [
    new CuisineRestaurants('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new CuisineRestaurants('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food'),
    new CuisineRestaurants('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new CuisineRestaurants('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food')
  ];

  constructor() { }

  ngOnInit() {
  }

}
