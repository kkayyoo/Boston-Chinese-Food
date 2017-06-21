import { EventEmitter, Injectable } from '@angular/core';
import { Restaurant } from '../shared/restaurants.model';
import { Cities } from './cities.model';

@Injectable()
export class CityService {
    citySelected = new EventEmitter<Cities>();
    cityRestaurants: Restaurant[] = [];

    private cityList: Cities[] = [
        new Cities('Boston', '12',
        [
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
        ]),
        new Cities('Brookline', '3',
        [
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
        ]),
        new Cities('Cambridge', '5',
        [
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
        ]),
        new Cities('Malden', '8',
        [
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
        ]),
        new Cities('Medford', '3',
        [
          new Restaurant('Chilli Garden', '/restaurant/0', '../../../../assets/images/restaurants/medford/ChilliGarden/chilli_garden.png'),
          new Restaurant('Shang Hai Moon', '/restaurant/1', '../../../../assets/images/restaurants/medford/ShanghaiMoon/shanghai_moon.png'),
          new Restaurant('May’s Cafe', '/restaurant/2', '../../../../assets/images/restaurants/medford/MayCafe/may.png')
        ]),
        new Cities('Quincy', '8',
        [
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg'),
          new Restaurant('ABC', 'restaurant/0', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg')
        ]),
    ];

    getCities() {
        return this.cityList.slice();
    }

    getCity(index: number) {
      return this.cityList[index];
    }

}
