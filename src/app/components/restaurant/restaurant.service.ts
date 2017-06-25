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
        new RestaurantDetail('Shanghai Moon', 'Huaiyang', '781-396-8881', '442 Salem St, Medford, MA ', '$$', '../../../../assets/images/restaurants/medford/ShanghaiMoon/shanghai_moon.png',
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
        //12
        new RestaurantDetail('Golden Garden', 'Shandong', '781-322-3708', '9 Highland Ave, Malden, MA 02148', '$$', '../../../../assets/images/restaurants/malden/goldengarden/golden.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sour Cabbage', '../../../../assets/images/restaurants/malden/goldengarden/cabbage.png', ''),
          new FeaturedFood('Braised Yellow Croaker', '../../../../assets/images/restaurants/malden/goldengarden/fish.png', ''),
          new FeaturedFood('Chicken Stew Mushroom', '../../../../assets/images/restaurants/malden/goldengarden/chicken.png', ''),
          new FeaturedFood('Pork Skin Aspic', '../../../../assets/images/restaurants/malden/goldengarden/skin.png', ''),
        ]),
    //Cambridge
        //13
        new RestaurantDetail('Shanghai Fresh', 'Huaiyang', '617-868-8877', '735 Massachusetts Ave, Cambridge, MA 02139', '$$', '../../../../assets/images/restaurants/cambridge/shanghaifresh/shanghaifresh.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Shanghai Steamed Pork Buns', '../../../../assets/images/restaurants/cambridge/shanghaifresh/dumplings.png', ''),
          new FeaturedFood('Lion head', '../../../../assets/images/restaurants/cambridge/shanghaifresh/lion.png', ''),
          new FeaturedFood('Shanghai Sticky Ricerice', '../../../../assets/images/restaurants/cambridge/shanghaifresh/rice.png', ''),
        ]),
        //14
        new RestaurantDetail('House of Chang', 'Cantonese, Dim Sum', '617-547-9888', '282 Concord Ave, Cambridge, MA 02138', '$$', '../../../../assets/images/restaurants/cambridge/houseofchang/chang.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Shanghai Steamed Pork Buns', '../../../../assets/images/restaurants/cambridge/shanghaifresh/dumplings.png', ''),
          new FeaturedFood('Lion head', '../../../../assets/images/restaurants/cambridge/shanghaifresh/lion.png', ''),
          new FeaturedFood('Shanghai Sticky Ricerice', '../../../../assets/images/restaurants/cambridge/shanghaifresh/rice.png', ''),
        ]),
        //15
        new RestaurantDetail('Qing Dao Garden', 'Shandong', '617-492-7540', '2382 Massachusetts Ave, Cambridge, MA 02138', '$$', '../../../../assets/images/restaurants/cambridge/qingdaogarden/qingdao.png',
        '../../../../assets/images/restaurants/cambridge/qingdaogarden/map.png', '11:30 am - 10:00 pm', '11:30 am - 10:00 pm',
        [
          new FeaturedFood('Zha Jiang Mian', '../../../../assets/images/restaurants/cambridge/qingdaogarden/noodles.png', ''),
          new FeaturedFood('Dumplings', '../../../../assets/images/restaurants/cambridge/qingdaogarden/dumpling1.png', ''),
          new FeaturedFood('Spicy Lamb w/ Cumin', '../../../../assets/images/restaurants/cambridge/qingdaogarden/lamb.png', ''),
          new FeaturedFood('Steamed Buns', '../../../../assets/images/restaurants/cambridge/qingdaogarden/buns.png', ''),
        ]),
        //16
        new RestaurantDetail('Dumpling House', 'Huaiyang', '617-661-8066', '950 Massachusetts Ave, Cambridge, MA 02139', '$$', '../../../../assets/images/restaurants/cambridge/dumplinghouse/dumplinghouse.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Zha Jiang Mian', '../../../../assets/images/restaurants/cambridge/qingdaogarden/noodles.png', ''),
          new FeaturedFood('Dumplings', '../../../../assets/images/restaurants/cambridge/qingdaogarden/dumpling1.png', ''),
          new FeaturedFood('Spicy Lamb w/ Cumin', '../../../../assets/images/restaurants/cambridge/qingdaogarden/lamb.png', ''),
          new FeaturedFood('Steamed Buns', '../../../../assets/images/restaurants/cambridge/qingdaogarden/buns.png', ''),
        ]),
        //17
        new RestaurantDetail('Happy Lamb Hot Pot', 'Hot Pot', '857-285-6933', '485 Massachusetts Ave, Cambridge, MA 02139', '$$', '../../../../assets/images/restaurants/cambridge/happylamb/happylamb.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Zha Jiang Mian', '../../../../assets/images/restaurants/cambridge/qingdaogarden/noodles.png', ''),
          new FeaturedFood('Dumplings', '../../../../assets/images/restaurants/cambridge/qingdaogarden/dumpling1.png', ''),
          new FeaturedFood('Spicy Lamb w/ Cumin', '../../../../assets/images/restaurants/cambridge/qingdaogarden/lamb.png', ''),
          new FeaturedFood('Steamed Buns', '../../../../assets/images/restaurants/cambridge/qingdaogarden/buns.png', ''),
        ]),
        //18
        new RestaurantDetail('Mary Chung Restaurant', 'Sichuan', '617-864-1991', '460 Massachusetts Ave, Cambridge, MA 02139', '$$', '../../../../assets/images/restaurants/cambridge/marychung/marychung.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Zha Jiang Mian', '../../../../assets/images/restaurants/cambridge/qingdaogarden/noodles.png', ''),
          new FeaturedFood('Dumplings', '../../../../assets/images/restaurants/cambridge/qingdaogarden/dumpling1.png', ''),
          new FeaturedFood('Spicy Lamb w/ Cumin', '../../../../assets/images/restaurants/cambridge/qingdaogarden/lamb.png', ''),
          new FeaturedFood('Steamed Buns', '../../../../assets/images/restaurants/cambridge/qingdaogarden/buns.png', ''),
        ]),
        //19
        new RestaurantDetail('Cilantro', 'Sichuan', '617-945-1768', '1105 Massachusetts Ave, Cambridge, MA 02138', '$$', '../../../../assets/images/restaurants/cambridge/cilantro/cilantro.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Zha Jiang Mian', '../../../../assets/images/restaurants/cambridge/qingdaogarden/noodles.png', ''),
          new FeaturedFood('Dumplings', '../../../../assets/images/restaurants/cambridge/qingdaogarden/dumpling1.png', ''),
          new FeaturedFood('Spicy Lamb w/ Cumin', '../../../../assets/images/restaurants/cambridge/qingdaogarden/lamb.png', ''),
          new FeaturedFood('Steamed Buns', '../../../../assets/images/restaurants/cambridge/qingdaogarden/buns.png', ''),
        ]),
        //20
        new RestaurantDetail('Tom’s Bao Bao', 'Buns', '617-945-0067', '84 Winthrop St, Cambridge, MA 02138', '$', '../../../../assets/images/restaurants/cambridge/tombaobao/bao.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Zha Jiang Mian', '../../../../assets/images/restaurants/cambridge/qingdaogarden/noodles.png', ''),
          new FeaturedFood('Dumplings', '../../../../assets/images/restaurants/cambridge/qingdaogarden/dumpling1.png', ''),
          new FeaturedFood('Spicy Lamb w/ Cumin', '../../../../assets/images/restaurants/cambridge/qingdaogarden/lamb.png', ''),
          new FeaturedFood('Steamed Buns', '../../../../assets/images/restaurants/cambridge/qingdaogarden/buns.png', ''),
        ]),
        //21
        new RestaurantDetail('Hong Kong', 'Cantonese', '617-864-5311', '1238 Massachusetts Ave, Cambridge, MA 31210', '$$', '../../../../assets/images/restaurants/cambridge/hongkong/hongkong.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Shanghai Steamed Pork Buns', '../../../../assets/images/restaurants/cambridge/shanghaifresh/dumplings.png', ''),
          new FeaturedFood('Lion head', '../../../../assets/images/restaurants/cambridge/shanghaifresh/lion.png', ''),
          new FeaturedFood('Shanghai Sticky Ricerice', '../../../../assets/images/restaurants/cambridge/shanghaifresh/rice.png', ''),
        ]),
        //22
        new RestaurantDetail('Royal East Restaurant', 'Cantonese', '617-661-1660', '792 Main St, Cambridge, MA 02139', '$$', '../../../../assets/images/restaurants/cambridge/royaleast/royal.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Shanghai Steamed Pork Buns', '../../../../assets/images/restaurants/cambridge/shanghaifresh/dumplings.png', ''),
          new FeaturedFood('Lion head', '../../../../assets/images/restaurants/cambridge/shanghaifresh/lion.png', ''),
          new FeaturedFood('Shanghai Sticky Ricerice', '../../../../assets/images/restaurants/cambridge/shanghaifresh/rice.png', ''),
        ]),
    //Brookline
        //23
        new RestaurantDetail('Bess’s Cafe', 'Noodles, Buns', '617-879-0993', '224 Cypress St, Brookline, MA 02445', '$$', '../../../../assets/images/restaurants/brookline/besscafe/bess.png',
        '../../../../assets/images/restaurants/brookline/besscafe/map.png', '11:00 am - 8:00 pm', '11:00 am - 7:00 pm',
        [
          new FeaturedFood('Spicy Beef Soup Noodles', '../../../../assets/images/restaurants/brookline/besscafe/noodles.png', ''),
          new FeaturedFood('Pork Belly Bun', '../../../../assets/images/restaurants/brookline/besscafe/porkbun.png', ''),
          new FeaturedFood('Pan Seared Dumplings', '../../../../assets/images/restaurants/brookline/besscafe/dumplings.png', ''),
          new FeaturedFood('Spicy Dumplings', '../../../../assets/images/restaurants/brookline/besscafe/spicydumpling.png', ''),
        ]),
        //24
        new RestaurantDetail('Sichuan Gourmet', 'Sichuan', '617-277-4226', '1004 Beacon St, Brookline, MA 02446', '$$', '../../../../assets/images/restaurants/brookline/sichuangourmet/oldsichuan.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //25
        new RestaurantDetail('Wu Er by WOW Barbecue', 'Barbecue', '617-566-8858', '320 Washington St, Brookline, MA 02445', '$$', '../../../../assets/images/restaurants/brookline/wuer/wuer.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //26
        new RestaurantDetail('Sichuan Garden', 'Sichuan', '617-734-1870', '295 Washington St, Brookline, MA 02445', '$$', '../../../../assets/images/restaurants/brookline/sichuangarden/sichuangarden.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //27
        new RestaurantDetail('Golden Temple', 'Chinese', '617-277-9722', '1651 Beacon St, Brookline, MA 02445', '$$', '../../../../assets/images/restaurants/brookline/goldentemple/goldentemple.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
    //Quincy
        //28
        new RestaurantDetail('Chili Square', 'Sichuan', '617-472-8888', '666 Hancock St, Quincy, MA 02170', '$$', '../../../../assets/images/restaurants/quincy/chillisquare/chillisquare.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //29
        new RestaurantDetail('L&C Asian Restaurant', 'Sichuan, Hot Pot', '617-328-3288', '47-49 Billings Rd, Quincy, MA 02171', '$$', '../../../../assets/images/restaurants/quincy/l&c/l&c.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //30
        new RestaurantDetail('South Garden', 'Cantonese', '617-328-6628', '217B Quincy Ave, Quincy, MA 02269', '$$', '../../../../assets/images/restaurants/quincy/southgarden/south.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //31
        new RestaurantDetail('Winsor Dim Sum House & Bar', 'Cantonese, Dim Sum', '617-481-5383', '706 Hancock St, Quincy, MA 02170', '$$', '../../../../assets/images/restaurants/quincy/winsor/winsor.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //32
        new RestaurantDetail('East Chinatown Restaurant', 'Cantonese, Dim Sum', '617-472-9928', '415 Hancock St, Quincy, MA 02171', '$$', '../../../../assets/images/restaurants/quincy/eastchinatown/east.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //33
        new RestaurantDetail('Imperial Terrace', 'Cantonese, Dim Sum', '617-471-2255', '105 Sea St, Quincy, MA 02169', '$', '../../../../assets/images/restaurants/quincy/imperial/imperial.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //34
        new RestaurantDetail('The China Restaurant and Sports Bar', 'Cantonese, Dim Sum', '617-786-8890', '681 Hancock St, Quincy, MA 02170', '$$', '../../../../assets/images/restaurants/quincy/thechina/thechina.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //35
        new RestaurantDetail('China Pearl', 'Cantonese, Dim Sum', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/quincy/pearl/pearl.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
    //Chinatown & Boston
        //36
        new RestaurantDetail('Q Restaurant', 'Hot Pot', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/q/q.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //37
        new RestaurantDetail('New Jumbo Seafood Restaurant', 'Cantonese', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/jumboseafood/jumboseafood.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //38
        new RestaurantDetail('Dumpling Palace', 'Dumplings', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/dumplingpalace/dumplingpalace.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //39
        new RestaurantDetail('Hot Eastern', 'Shandong', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/hoteastern/hot.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //40
        new RestaurantDetail('Gourmet Dumpling House', 'Dumplings', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/dumplinghouse/dumplinghouse.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //41
        new RestaurantDetail('Clay Pot Cafe', 'Cantonese', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/claypot/claypot.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //42
        new RestaurantDetail('New Golden Gate', 'Cantonese', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/newgoldengate/newgoldengate.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //43
        new RestaurantDetail('Peach Farm', 'Cantonese', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/peachfarm/peachfarm.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //44
        new RestaurantDetail('Hong Kong Eatery', 'Cantonese', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/hongkongeatery/hongkongeatery.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //45
        new RestaurantDetail('Gaga Seafood Restaurant', 'Cantonese', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/gaga/gaga.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //46
        new RestaurantDetail('Hei La Moon', 'Cantonese, Dim Sum', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/heilamoon/heilamoon.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //47
        new RestaurantDetail('5 Spices House', 'Sichuan', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/boston/5spicy/5spicy.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
        //48
        new RestaurantDetail('Shanghai Gate', 'Huaiyang', '617-773-9838', '237 Quincy Ave, Quincy, MA 02169', '$$', '../../../../assets/images/restaurants/shanghaigate.png',
        '../../../../assets/images/restaurants/malden/ming/map.png', '9:00 am - 1:00 am', '9:00 am - 2:00 am',
        [
          new FeaturedFood('Sliced Pork Belly w/ Fresh Garlic', '../../../../assets/images/restaurants/brookline/sichuangourmet/pork.png', ''),
          new FeaturedFood('Fish Fillet w/ Chilli Miso Sauce', '../../../../assets/images/restaurants/brookline/sichuangourmet/fish.png', ''),
          new FeaturedFood('Dan Dan Noodles', '../../../../assets/images/restaurants/brookline/sichuangourmet/dandan.png', ''),
          new FeaturedFood('Kung Pao Chicken', '../../../../assets/images/restaurants/brookline/sichuangourmet/chicken.png', ''),
        ]),
    ];

    getRestaurants() {
        return this.restaurantList.slice();
    }

    getRestaurant(index: number) {
      return this.restaurantList[index];
    }

}
