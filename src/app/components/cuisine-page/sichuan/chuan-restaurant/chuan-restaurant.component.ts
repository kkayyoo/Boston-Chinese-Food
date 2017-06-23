import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/restaurants.model';

@Component({
  selector: 'app-chuan-restaurant',
  templateUrl: './chuan-restaurant.component.html',
  styleUrls: ['./chuan-restaurant.component.scss']
})
export class ChuanRestaurantComponent implements OnInit {

  restaurantChuan: Restaurant[] = [
    new Restaurant('Chilli Garden', '/restaurant/0', '../../../../assets/images/restaurants/medford/ChilliGarden/chilli_garden.png'),
    new Restaurant('Sichuan Gourmet', '/restaurant/24', '../../../../assets/images/restaurants/brookline/sichuangourmet/oldsichuan.png'),
    new Restaurant('Sichuan Garden', '/restaurant/26', '../../../../assets/images/restaurants/brookline/sichuangarden/sichuangarden.png'),
    new Restaurant('Sichuan Taste', '/restaurant/4', '../../../../assets/images/restaurants/malden/sichuanT/sichuan_taste.png'),
    ];

  constructor() { }

  ngOnInit() {
  }

}
