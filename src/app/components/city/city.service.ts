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
          new Restaurant('Q Restaurant', '/restaurant/36', '../../../../assets/images/restaurants/boston/q/q.png'),
          new Restaurant('Dumpling Palace', '/restaurant/38', '../../../../assets/images/restaurants/boston/dumplingpalace/dumplingpalace.png'),
          new Restaurant('Hot Eastern', '/restaurant/39', '../../../../assets/images/restaurants/boston/hoteastern/hot.png'),
          new Restaurant('Clay Pot Cafe', '/restaurant/41', '../../../../assets/images/restaurants/boston/claypot/claypot.png'),
          new Restaurant('New Golden Gate', '/restaurant/42', '../../../../assets/images/restaurants/boston/newgoldengate/newgoldengate.png'),
          new Restaurant('Peach Farm', '/restaurant/43', '../../../../assets/images/restaurants/boston/peachfarm/peachfarm.png'),
          new Restaurant('Hong Kong Eatery', '/restaurant/44', '../../../../assets/images/restaurants/boston/hongkongeatery/hongkongeatery.png'),
          new Restaurant('Hei La Moon', '/restaurant/46', '../../../../assets/images/restaurants/boston/heilamoon/heilamoon.png'),
          new Restaurant('5 Spices House', '/restaurant/47', '../../../../assets/images/restaurants/boston/5spicy/5spicy.png'),
          new Restaurant('New Jumbo Seafood Restaurant', '/restaurant/37', '../../../../assets/images/restaurants/boston/jumboseafood/jumboseafood.png'),
          new Restaurant('Gourmet Dumpling House', '/restaurant/40', '../../../../assets/images/restaurants/boston/dumplinghouse/dumplinghouse.png'),
          new Restaurant('Gaga Seafood Restaurant', '/restaurant/45', '../../../../assets/images/restaurants/boston/gaga/gaga.png'),

        ]),
        new Cities('Brookline', '5',
        [
          new Restaurant('Bess’s Cafe', '/restaurant/23', '../../../../assets/images/restaurants/brookline/besscafe/bess.png'),
          new Restaurant('Sichuan Gourmet', '/restaurant/24', '../../../../assets/images/restaurants/brookline/sichuangourmet/oldsichuan.png'),
          new Restaurant('Sichuan Garden', '/restaurant/26', '../../../../assets/images/restaurants/brookline/sichuangarden/sichuangarden.png'),
          new Restaurant('Golden Temple', '/restaurant/27', '../../../../assets/images/restaurants/brookline/goldentemple/goldentemple.png'),
          new Restaurant('Wu Er by WOW Barbecue', '/restaurant/25', '../../../../assets/images/restaurants/brookline/wuer/wuer.png'),
        ]),
        new Cities('Cambridge', '10',
        [
          new Restaurant('Shanghai Fresh', '/restaurant/13', '../../../../assets/images/restaurants/cambridge/shanghaifresh/shanghaifresh.png'),
          new Restaurant('House of Chang', '/restaurant/14', '../../../../assets/images/restaurants/cambridge/houseofchang/chang.png'),
          new Restaurant('Qing Dao Garden', '/restaurant/15', '../../../../assets/images/restaurants/cambridge/qingdaogarden/qingdao.png'),
          new Restaurant('Dumpling House', '/restaurant/16', '../../../../assets/images/restaurants/cambridge/dumplinghouse/dumplinghouse.png'),
          new Restaurant('Happy Lamb Hot Pot', '/restaurant/17', '../../../../assets/images/restaurants/cambridge/happylamb/happylamb.png'),
          new Restaurant('Mary Chung Restaurant', '/restaurant/18', '../../../../assets/images/restaurants/cambridge/marychung/marychung.png'),
          new Restaurant('Cilantro', '/restaurant/19', '../../../../assets/images/restaurants/cambridge/cilantro/cilantro.png'),
          new Restaurant('Tom’s Bao Bao', '/restaurant/20', '../../../../assets/images/restaurants/cambridge/tombaobao/bao.png'),
          new Restaurant('Hong Kong', '/restaurant/21', '../../../../assets/images/restaurants/cambridge/hongkong/hongkong.png'),
          new Restaurant('Royal East Restaurant', '/restaurant/22', '../../../../assets/images/restaurants/cambridge/royaleast/royal.png'),
        ]),
        new Cities('Malden', '10',
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
          new Restaurant('Golden Garden', '/restaurant/12', '../../../../assets/images/restaurants/malden/goldengarden/golden.png'),
        ]),
        new Cities('Medford', '3',
        [
          new Restaurant('Chilli Garden', '/restaurant/0', '../../../../assets/images/restaurants/medford/ChilliGarden/chilli_garden.png'),
          new Restaurant('Shang Hai Moon', '/restaurant/1', '../../../../assets/images/restaurants/medford/ShanghaiMoon/shanghai_moon.png'),
          new Restaurant('May’s Cafe', '/restaurant/2', '../../../../assets/images/restaurants/medford/MayCafe/may.png')
        ]),
        new Cities('Quincy', '8',
        [
          new Restaurant('Chili Square', '/restaurant/28', '../../../../assets/images/restaurants/quincy/chillisquare/chillisquare.png'),
          new Restaurant('South Garden', '/restaurant/30', '../../../../assets/images/restaurants/quincy/southgarden/south.png'),
          new Restaurant('East Chinatown Restaurant', '/restaurant/32', '../../../../assets/images/restaurants/quincy/eastchinatown/east.png'),
          new Restaurant('Imperial Terrace', '/restaurant/33', '../../../../assets/images/restaurants/quincy/imperial/imperial.png'),
          new Restaurant('China Pearl', '/restaurant/35', '../../../../assets/images/restaurants/quincy/pearl/pearl.png'),
          new Restaurant('L&C Asian Restaurant', '/restaurant/29', '../../../../assets/images/restaurants/quincy/l&c/l&c.png'),
          new Restaurant('Winsor Dim Sum House & Bar', '/restaurant/31', '../../../../assets/images/restaurants/quincy/winsor/winsor.png'),
          new Restaurant('The China Restaurant and Sports Bar', '/restaurant/34', '../../../../assets/images/restaurants/quincy/thechina/thechina.png'),
        ]),
    ];

    getCities() {
        return this.cityList.slice();
    }

    getCity(index: number) {
      return this.cityList[index];
    }

}
