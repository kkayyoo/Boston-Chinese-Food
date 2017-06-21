import { EventEmitter, Injectable } from '@angular/core';
import { FeaturedFood } from '../shared/food.model';
import { RestaurantDetail } from './restaurants.model';

@Injectable()
export class RestaurantService {
    restaurantSelected = new EventEmitter<RestaurantDetail>();
    restaurantFood: FeaturedFood[] = [];

    private restaurantList: RestaurantDetail[] = [
        new RestaurantDetail('Chilli Garden', 'Sichuan', '781-396-8488', '41 Riverside Ave, Medford, MA', '$$', '../../../../assets/images/restaurants/medford/ChilliGarden/chilli_garden.png',
        '../../../../assets/images/restaurants/medford/ChilliGarden/map.png', '12:00 noon - 9:30 pm', '12:00 noon - 10:30 pm',
        [
          new FeaturedFood('Double Cooked Pork Belly', '../../../../assets/images/restaurants/medford/ChilliGarden/pork.png', ''),
          new FeaturedFood('Sliced Beef, Omasum & Tendon', '../../../../assets/images/restaurants/medford/ChilliGarden/feipian.png', ''),
          new FeaturedFood('Sichuan Style Cold Noodle', '../../../../assets/images/restaurants/medford/ChilliGarden/liangmian.png', ''),
          new FeaturedFood('Diced Chicken w/ House Made Pickles', '../../../../assets/images/restaurants/medford/ChilliGarden/chicken.png', ''),
          
        ]),
        new RestaurantDetail('Brookline', 'Cantonese', '781-396-8488', '41 Riverside Ave, Medford, MA', '$$', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg',
        '../../../../assets/images/restaurants/medford/ChilliGarden/map.png', '12:00 noon - 9:30 pm', '12:00 noon - 10:30 pm',
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
