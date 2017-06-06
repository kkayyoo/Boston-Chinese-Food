import { Component, OnInit } from '@angular/core';
import { FeaturedFood } from '../foods.model';
@Component({
  selector: 'app-featured-food-items',
  templateUrl: './featured-food-items.component.html',
  styleUrls: ['./featured-food-items.component.scss']
})
export class FeaturedFoodItemsComponent implements OnInit {
  featuredFoodList: FeaturedFood[] = [
    new FeaturedFood('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new FeaturedFood('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food'),
    new FeaturedFood('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new FeaturedFood('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food')
  ];

  constructor() { }

  ngOnInit() {
  }

}
