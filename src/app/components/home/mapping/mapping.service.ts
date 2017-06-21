import { EventEmitter, Injectable } from '@angular/core';

import { City } from './mappings.model';
import { Restaurant } from '../../shared/restaurants.model';

export class MappingService {
    mapSelected = new EventEmitter<City>();

    private cityList: City[] = [
      new City('Chinatown', '../../../../../assets/images/map/chinatown.png',
      [
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
      ]),
      new City('Boston', '../../../../../assets/images/map/boston.png',
      [
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
      ]),
      new City('Brookline', '../../../../../assets/images/map/brookline.png',
      [
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
      ]),
      new City('Cambridge', '../../../../../assets/images/map/cambridge.png',
      [
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
      ]),
      new City('Malden', '../../../../../assets/images/map/malden.png',
      [
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
      ]),
      new City('Medford', '../../../../../assets/images/map/medford.png',
      [
        new Restaurant('Chilli Garden', '/restaurant/0', '../../../../../assets/images/restaurants/medford/ChilliGarden/chilli_garden.png'),
        new Restaurant('Shang Hai Moon', '/restaurant/1', '../../../../../assets/images/restaurants/medford/ShanghaiMoon/shanghai_moon.png'),
        new Restaurant('May’s Cafe', '/restaurant/2', '../../../../../assets/images/restaurants/medford/MayCafe/may.png')
      ]),
      new City('Quincy', '../../../../../assets/images/map/quincy.png',
      [
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
        new Restaurant('ABC', '/restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
      ]),
    ];

    getMaps() {
        return this.cityList.slice();
    }
}
