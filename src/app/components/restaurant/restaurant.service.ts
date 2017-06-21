import { EventEmitter, Injectable } from '@angular/core';
import { FeaturedFood } from '../shared/food.model';
import { RestaurantDetail } from './restaurants.model';

@Injectable()
export class RestaurantService {
    restaurantSelected = new EventEmitter<RestaurantDetail>();
    restaurantFood: FeaturedFood[] = [];

    private restaurantList: RestaurantDetail[] = [
    //Medford
        //0
        new RestaurantDetail('Chilli Garden', 'Sichuan', '781-396-8488', '41 Riverside Ave, Medford, MA', '$$', '../../../../assets/images/restaurants/medford/ChilliGarden/chilli_garden.png',
        '../../../../assets/images/restaurants/medford/ChilliGarden/map.png', '12:00 noon - 9:30 pm', '12:00 noon - 10:30 pm',
        [
          new FeaturedFood('Double Cooked Pork Belly', '../../../../assets/images/restaurants/medford/ChilliGarden/pork.png', ''),
          new FeaturedFood('Sliced Beef, Omasum & Tendon', '../../../../assets/images/restaurants/medford/ChilliGarden/feipian.png', ''),
          new FeaturedFood('Sichuan Style Cold Noodle', '../../../../assets/images/restaurants/medford/ChilliGarden/liangmian.png', ''),
          new FeaturedFood('Diced Chicken w/ House Made Pickles', '../../../../assets/images/restaurants/medford/ChilliGarden/chicken.png', ''),

        ]),
        //1
        new RestaurantDetail('Shanghai Moon', 'Chinese, Japanese', '781-396-8881', '442 Salem St, Medford, MA ', '$$', '../../../../assets/images/restaurants/medford/ShanghaiMoon/shanghai_moon.png',
        '../../../../assets/images/restaurants/medford/ChilliGarden/map.png', '12:00 noon - 9:30 pm', '12:00 noon - 10:30 pm',
        [
          new FeaturedFood('123', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC'),
          new FeaturedFood('234', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ'),
        ]),
        //2
        new RestaurantDetail('May’s Cafe Chinese Food', 'Chinese', '781-396-8750', '367 Main St, Medford, MA 02155', '$', '../../../../assets/images/restaurants/medford/MayCafe/may.png',
        '../../../../assets/images/restaurants/medford/ChilliGarden/map.png', '12:00 noon - 9:30 pm', '12:00 noon - 10:30 pm',
        [
          new FeaturedFood('123', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC'),
          new FeaturedFood('234', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ'),
        ]),
    //Malden
        //3
        new RestaurantDetail('Ming’s Seafood Restaurant', 'Cantonese', '781-321-3888', '19 Pleasant St, Malden, MA 02148', '$', '../../../../assets/images/restaurants/malden/ming/ming.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 1:00 am',
        [
          new FeaturedFood('Dim Sum', '../../../../assets/images/restaurants/malden/ming/dimsum.png', ''),
          new FeaturedFood('Salt & Pepper Calamari', '../../../../assets/images/restaurants/malden/ming/calamari.png', ''),
          new FeaturedFood('Twin Ginger Sallion Lobster', '../../../../assets/images/restaurants/malden/ming/lobster.png', ''),
          new FeaturedFood('Dried Scallop Egg White Fried Rice', '../../../../assets/images/restaurants/malden/ming/friedrice.png', ''),
        ]),
    ];

    getRestaurants() {
        return this.restaurantList.slice();
    }

    getRestaurant(index: number) {
      return this.restaurantList[index];
    }

}
