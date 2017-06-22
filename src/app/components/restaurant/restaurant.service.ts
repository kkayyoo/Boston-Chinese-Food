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
        new RestaurantDetail('Ming’s Seafood Restaurant', 'Cantonese', '781-321-3888', '19 Pleasant St, Malden, MA 02148', '$$', '../../../../assets/images/restaurants/malden/ming/ming.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 1:00 am',
        [
          new FeaturedFood('Dim Sum', '../../../../assets/images/restaurants/malden/ming/dimsum.png', ''),
          new FeaturedFood('Salt & Pepper Calamari', '../../../../assets/images/restaurants/malden/ming/calamari.png', ''),
          new FeaturedFood('Twin Ginger Sallion Lobster', '../../../../assets/images/restaurants/malden/ming/lobster.png', ''),
          new FeaturedFood('Dried Scallop Egg White Fried Rice', '../../../../assets/images/restaurants/malden/ming/friedrice.png', ''),
        ]),
        //4
        new RestaurantDetail('Sichuan Taste', 'Sichuan', '781-480-3671', '290 Main St, Malden, MA 02184', '$$', '../../../../assets/images/restaurants/malden/sichuanT/sichuan_taste.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '11:30 am - 10:30 pm', '11:30 am - 12:00 am',
        [
          new FeaturedFood('Sichuan Roasted Fish w/ Chilli Peppers', '../../../../assets/images/restaurants/malden/sichuanT/fish.png', ''),
          new FeaturedFood('Cheng Du Chicken', '../../../../assets/images/restaurants/malden/sichuanT/laziji.png', ''),
          new FeaturedFood('Ma Po Tufu', '../../../../assets/images/restaurants/malden/sichuanT/mapotufu.png', ''),
        ]),
        //5
        new RestaurantDetail('FuLoon Restaurant', 'Shandong', '781-388-3338', '375 Main St, Malden, MA 02148', '$$', '../../../../assets/images/restaurants/malden/fuloon/fuloon.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '11:30 am - 10:00 pm', '12:00 pm - 10:30 am',
        [
          new FeaturedFood('Tofu Knots w/ Braised Pork', '../../../../assets/images/restaurants/malden/fuloon/tufupork.png', ''),
          new FeaturedFood('Spicy and Sour Cabbage', '../../../../assets/images/restaurants/malden/fuloon/cabbage.png', ''),
          new FeaturedFood('Sweet and Sour Fish', '../../../../assets/images/restaurants/malden/fuloon/fish.png', ''),
          new FeaturedFood('Steamed Pork Shoulder', '../../../../assets/images/restaurants/malden/fuloon/pork.png', ''),
        ]),
        //6
        new RestaurantDetail('Sun Kong', 'Cantonese', '781-388-9900', '275 Eastern Ave, Malden, MA 02148', '$$', '../../../../assets/images/restaurants/malden/sunkong/sunkong.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Clams in Spicy Black Bean Sauce', '../../../../assets/images/restaurants/malden/sunkong/clam.png', ''),
          new FeaturedFood('Liu Sha Bun', '../../../../assets/images/restaurants/malden/sunkong/bun.png', ''),
          new FeaturedFood('Sweet and Sour Fish', '../../../../assets/images/restaurants/malden/fuloon/fish.png', ''),
          new FeaturedFood('Steamed Pork Shoulder', '../../../../assets/images/restaurants/malden/fuloon/pork.png', ''),
        ]),
        //7
        new RestaurantDetail('WOW Barbecue', 'Sichuan', '781-605-2766', '184 Salem St, Malden, MA 02148', '$$', '../../../../assets/images/restaurants/malden/wow/wow.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Spicy Pot', '../../../../assets/images/restaurants/malden/wow/pot.png', ''),
          new FeaturedFood('Grilled Fish', '../../../../assets/images/restaurants/malden/wow/fish.png', ''),
          new FeaturedFood('Barbecue', '../../../../assets/images/restaurants/malden/wow/bbq.png', ''),
          new FeaturedFood('Steamed Pork Shoulder', '../../../../assets/images/restaurants/malden/fuloon/pork.png', ''),
        ]),
        //8
        new RestaurantDetail('Cafe de Lulu', 'Cantonese', '781-605-2810', '64 Summer St, Malden, MA 02148', '$', '../../../../assets/images/restaurants/malden/lulucafe/lulu.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Spicy Pot', '../../../../assets/images/restaurants/malden/wow/pot.png', ''),
          new FeaturedFood('Grilled Fish', '../../../../assets/images/restaurants/malden/wow/fish.png', ''),
          new FeaturedFood('Barbecue', '../../../../assets/images/restaurants/malden/wow/bbq.png', ''),
          new FeaturedFood('Steamed Pork Shoulder', '../../../../assets/images/restaurants/malden/fuloon/pork.png', ''),
        ]),
        //9
        new RestaurantDetail('Mandarin Malden', 'Taiwanese', '781-324-1148', '74 Pleasant St, Malden, MA 02148', '$$', '../../../../assets/images/restaurants/malden/mandarin/mandarin.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Braised Pork over Rice', '../../../../assets/images/restaurants/malden/mandarin/porkrice.png', ''),
          new FeaturedFood('Ginger Chicken Casserole', '../../../../assets/images/restaurants/malden/mandarin/chicken.png', ''),
          new FeaturedFood('Barbecue', '../../../../assets/images/restaurants/malden/wow/bbq.png', ''),
          new FeaturedFood('Steamed Pork Shoulder', '../../../../assets/images/restaurants/malden/fuloon/pork.png', ''),
        ]),
        //10
        new RestaurantDetail('Go Chi', 'Shandong', '781-605-2558', '390 Main St, Malden, MA 02148', '$$', '../../../../assets/images/restaurants/malden/gochi/gochi.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Braised Pork over Rice', '../../../../assets/images/restaurants/malden/mandarin/porkrice.png', ''),
          new FeaturedFood('Ginger Chicken Casserole', '../../../../assets/images/restaurants/malden/mandarin/chicken.png', ''),
          new FeaturedFood('Barbecue', '../../../../assets/images/restaurants/malden/wow/bbq.png', ''),
          new FeaturedFood('Steamed Pork Shoulder', '../../../../assets/images/restaurants/malden/fuloon/pork.png', ''),
        ]),
        //11
        new RestaurantDetail('Kung Fu Tea', 'Beverage', '781-321-1898', '3 Pleasant St， Malden, MA 02148', '$', '../../../../assets/images/restaurants/malden/kungfutea/kungfutea.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Braised Pork over Rice', '../../../../assets/images/restaurants/malden/mandarin/porkrice.png', ''),
          new FeaturedFood('Ginger Chicken Casserole', '../../../../assets/images/restaurants/malden/mandarin/chicken.png', ''),
          new FeaturedFood('Barbecue', '../../../../assets/images/restaurants/malden/wow/bbq.png', ''),
          new FeaturedFood('Steamed Pork Shoulder', '../../../../assets/images/restaurants/malden/fuloon/pork.png', ''),
        ]),

    ];

    getRestaurants() {
        return this.restaurantList.slice();
    }

    getRestaurant(index: number) {
      return this.restaurantList[index];
    }

}
