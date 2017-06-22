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
        new Restaurant('Bess’s Cafe', '/restaurant/23', '../../../../assets/images/restaurants/brookline/besscafe/bess.png'),
        new Restaurant('Sichuan Gourmet', '/restaurant/24', '../../../../assets/images/restaurants/brookline/sichuangourmet/oldsichuan.png'),
        new Restaurant('Sichuan Garden', '/restaurant/26', '../../../../assets/images/restaurants/brookline/sichuangarden/sichuangarden.png'),
        new Restaurant('Wu Er by WOW Barbecue', '/restaurant/25', '../../../../assets/images/restaurants/brookline/wuer/wuer.png'),
      ]),
      new City('Cambridge', '../../../../../assets/images/map/cambridge.png',
      [
        new Restaurant('Shanghai Fresh', '/restaurant/13', '../../../../assets/images/restaurants/cambridge/shanghaifresh/shanghaifresh.png'),
        new Restaurant('Qing Dao Garden', '/restaurant/15', '../../../../assets/images/restaurants/cambridge/qingdaogarden/qingdao.png'),
        new Restaurant('Dumpling House', '/restaurant/16', '../../../../assets/images/restaurants/cambridge/dumplinghouse/dumplinghouse.png'),
        new Restaurant('Happy Lamb Hot Pot', '/restaurant/17', '../../../../assets/images/restaurants/cambridge/happylamb/happylamb.png'),
      ]),
      new City('Malden', '../../../../../assets/images/map/malden.png',
      [
        new Restaurant('Ming’s Seafood', '/restaurant/3', '../../../../assets/images/restaurants/malden/ming/ming.png'),
        new Restaurant('Sichuan Taste', '/restaurant/4', '../../../../assets/images/restaurants/malden/sichuanT/sichuan_taste.png'),
        new Restaurant('FuLoon Restaurant', '/restaurant/5', '../../../../assets/images/restaurants/malden/fuloon/fuloon.png'),
        new Restaurant('Sun Kong', '/restaurant/6', '../../../../assets/images/restaurants/malden/sunkong/sunkong.png'),
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
