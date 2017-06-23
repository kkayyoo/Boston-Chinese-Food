import { EventEmitter, Injectable } from '@angular/core';
import { Restaurant } from '../shared/restaurants.model';
import { Types } from './types.model';

@Injectable()
export class TypeService {
    typeSelected = new EventEmitter<Types>();
    typeRestaurants: Restaurant[] = [];

    private typeList: Types[] = [
        new Types('Hot Pot', '3',
        [
          new Restaurant('Q Restaurant', '/restaurant/36', '../../../../assets/images/restaurants/boston/q/q.png'),
          new Restaurant('Happy Lamb Hot Pot', '/restaurant/17', '../../../../assets/images/restaurants/cambridge/happylamb/happylamb.png'),
          new Restaurant('L&C Asian Restaurant', '/restaurant/29', '../../../../assets/images/restaurants/quincy/l&c/l&c.png'),
        ]),
        new Types('BBQ', '4',
        [
          new Restaurant('5 Spices House', '/restaurant/47', '../../../../assets/images/restaurants/boston/5spicy/5spicy.png'),
          new Restaurant('WOW Barbecue', '/restaurant/7', '../../../../assets/images/restaurants/malden/wow/wow.png'),
          new Restaurant('Go Chi', '/restaurant/10', '../../../../assets/images/restaurants/malden/gochi/gochi.png'),
          new Restaurant('Wu Er by WOW Barbecue', '/restaurant/25', '../../../../assets/images/restaurants/brookline/wuer/wuer.png'),
        ]),
        new Types('Dim Sum', '10',
        [
          new Restaurant('Hei La Moon', '/restaurant/46', '../../../../assets/images/restaurants/boston/heilamoon/heilamoon.png'),
          new Restaurant('House of Chang', '/restaurant/14', '../../../../assets/images/restaurants/cambridge/houseofchang/chang.png'),
          new Restaurant('Ming’s Seafood', '/restaurant/3', '../../../../assets/images/restaurants/malden/ming/ming.png'),
          new Restaurant('Sun Kong', '/restaurant/6', '../../../../assets/images/restaurants/malden/sunkong/sunkong.png'),
          new Restaurant('South Garden', '/restaurant/30', '../../../../assets/images/restaurants/quincy/southgarden/south.png'),
          new Restaurant('China Pearl', '/restaurant/35', '../../../../assets/images/restaurants/quincy/pearl/pearl.png'),
          new Restaurant('Winsor Dim Sum House & Bar', '/restaurant/31', '../../../../assets/images/restaurants/quincy/winsor/winsor.png'),
          new Restaurant('The China Restaurant and Sports Bar', '/restaurant/34', '../../../../assets/images/restaurants/quincy/thechina/thechina.png'),
          new Restaurant('New Jumbo Seafood Restaurant', '/restaurant/37', '../../../../assets/images/restaurants/boston/jumboseafood/jumboseafood.png'),
          new Restaurant('East Chinatown Restaurant', '/restaurant/32', '../../../../assets/images/restaurants/quincy/eastchinatown/east.png'),
        ]),
        new Types('Noodles', '4',
        [
          new Restaurant('Dumpling Palace', '/restaurant/38', '../../../../assets/images/restaurants/boston/dumplingpalace/dumplingpalace.png'),
          new Restaurant('Hong Kong Eatery', '/restaurant/44', '../../../../assets/images/restaurants/boston/hongkongeatery/hongkongeatery.png'),
          new Restaurant('Gourmet Dumpling House', '/restaurant/40', '../../../../assets/images/restaurants/boston/dumplinghouse/dumplinghouse.png'),
          new Restaurant('Bess’s Cafe', '/restaurant/23', '../../../../assets/images/restaurants/brookline/besscafe/bess.png'),
        ]),
        new Types('Dumplings & Buns', '7',
        [
          new Restaurant('Tom’s Bao Bao', '/restaurant/20', '../../../../assets/images/restaurants/cambridge/tombaobao/bao.png'),
          new Restaurant('Dumpling House', '/restaurant/16', '../../../../assets/images/restaurants/cambridge/dumplinghouse/dumplinghouse.png'),
          new Restaurant('Qing Dao Garden', '/restaurant/15', '../../../../assets/images/restaurants/cambridge/qingdaogarden/qingdao.png'),
          new Restaurant('Shanghai Fresh', '/restaurant/13', '../../../../assets/images/restaurants/cambridge/shanghaifresh/shanghaifresh.png'),
          new Restaurant('Bess’s Cafe', '/restaurant/23', '../../../../assets/images/restaurants/brookline/besscafe/bess.png'),
          new Restaurant('Gourmet Dumpling House', '/restaurant/40', '../../../../assets/images/restaurants/boston/dumplinghouse/dumplinghouse.png'),
          new Restaurant('Dumpling Palace', '/restaurant/38', '../../../../assets/images/restaurants/boston/dumplingpalace/dumplingpalace.png'),
        ]),
    ];

    getTypes() {
        return this.typeList.slice();
    }

    getType(index: number) {
      return this.typeList[index];
    }

}
