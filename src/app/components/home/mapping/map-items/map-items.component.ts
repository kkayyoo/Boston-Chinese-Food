import { Component, OnInit } from '@angular/core';
import { Mapping } from '../mappings.model';

@Component({
  selector: 'app-map-items',
  templateUrl: './map-items.component.html',
  styleUrls: ['./map-items.component.scss']
})
export class MapItemsComponent implements OnInit {
  mappingList: Mapping[] = [
    new Mapping('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC'),
    new Mapping('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ'),
    new Mapping('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC'),
    new Mapping('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ')
  ];

  constructor() { }

  ngOnInit() {
  }

}
