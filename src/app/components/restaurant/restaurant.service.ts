import { EventEmitter, Injectable } from '@angular/core';
import { FeaturedFood } from '../shared/food.model';
import { RestaurantDetail } from './restaurants.model';

@Injectable()
export class RestaurantService {
    restaurantSelected = new EventEmitter<RestaurantDetail>();
    restaurantFood: FeaturedFood[] = [];

    private restaurantList: RestaurantDetail[] = [
        new RestaurantDetail('Boston', 'Sichuan', '781-396-8488', '41 Riverside Ave, Medford, MA',
        [
          new FeaturedFood('123', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC'),
          new FeaturedFood('234', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ'),
        ]),
        new RestaurantDetail('Brookline', 'Cantonese', '781-396-8488', '41 Riverside Ave, Medford, MA',
        [
          new FeaturedFood('123', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC'),
          new FeaturedFood('234', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ'),
        ]),
    ];

    getRestaurants() {
        return this.restaurantList.slice();
    }

    getRestaurant(index: number) {
      return this.restaurantList[index];
    }

}