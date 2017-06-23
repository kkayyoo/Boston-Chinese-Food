import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-huai-restaurant',
  templateUrl: './huai-restaurant.component.html',
  styleUrls: ['./huai-restaurant.component.scss']
})
export class HuaiRestaurantComponent implements OnInit {

  restaurantHuai: Restaurant[] = [
    new Restaurant('Shanghai Fresh', '/restaurant/13', '../../../../assets/images/restaurants/cambridge/shanghaifresh/shanghaifresh.png'),
    new Restaurant('Shang Hai Moon', '/restaurant/1', '../../../../assets/images/restaurants/medford/ShanghaiMoon/shanghai_moon.png'),
    new Restaurant('Dumpling House', '/restaurant/16', '../../../../assets/images/restaurants/cambridge/dumplinghouse/dumplinghouse.png'),
    new Restaurant('Shang Hai Gate', '/restaurant/48', '../../../../assets/images/restaurants/shanghaigate.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
