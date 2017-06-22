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
          new Restaurant('Ming’s Seafood', '/restaurant/3', '../../../../assets/images/restaurants/malden/ming/ming.png'),
          new Restaurant('Sichuan Taste', '/restaurant/4', '../../../../assets/images/restaurants/malden/sichuanT/sichuan_taste.png'),
          new Restaurant('FuLoon Restaurant', '/restaurant/5', '../../../../assets/images/restaurants/malden/fuloon/fuloon.png'),
          new Restaurant('Sun Kong', '/restaurant/6', '../../../../assets/images/restaurants/malden/sunkong/sunkong.png'),
          new Restaurant('WOW Barbecue', '/restaurant/7', '../../../../assets/images/restaurants/malden/wow/wow.png'),
          new Restaurant('Cafe de Lulu', '/restaurant/8', '../../../../assets/images/restaurants/malden/lulucafe/lulu.png'),
          new Restaurant('Mandarin Malden', '/restaurant/9', '../../../../assets/images/restaurants/malden/mandarin/mandarin.png'),
          new Restaurant('Go Chi', '/restaurant/10', '../../../../assets/images/restaurants/malden/gochi/gochi.png'),
          new Restaurant('Kung Fu Tea', '/restaurant/11', '../../../../assets/images/restaurants/malden/kungfutea/kungfutea.png'),
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
