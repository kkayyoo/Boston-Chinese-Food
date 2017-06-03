import { Component, OnInit } from '@angular/core';
import { FourCuisines } from '../cuisines.model';

@Component({
  selector: 'app-cuisine-items',
  templateUrl: './cuisine-items.component.html',
  styleUrls: ['./cuisine-items.component.scss']
})
export class CuisineItemsComponent implements OnInit {
  cuisineList: FourCuisines[] = [
    new FourCuisines('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'Shangdong Cuisine', 'info info info info info'),
    new FourCuisines('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'Cantonese Cuisine', 'info info info info info'),
    new FourCuisines('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'Sichuan Cuisine', 'info info info info info'),
    new FourCuisines('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'Huiyang Cuisine', 'info info info info info')
  ];

  constructor() { }

  ngOnInit() {
  }

}
