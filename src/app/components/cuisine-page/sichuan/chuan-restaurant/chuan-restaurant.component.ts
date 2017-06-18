import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-chuan-restaurant',
  templateUrl: './chuan-restaurant.component.html',
  styleUrls: ['./chuan-restaurant.component.scss']
})
export class ChuanRestaurantComponent implements OnInit {

  restaurantChuan: Restaurant[] = [
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food2'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food2'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food2'),
    new Restaurant('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food2')
  ];

  constructor() { }

  ngOnInit() {
  }

}
