import { Component, OnInit } from '@angular/core';
import { FourCuisines } from '../cuisines.model';

@Component({
  selector: 'app-cuisine-items',
  templateUrl: './cuisine-items.component.html',
  styleUrls: ['./cuisine-items.component.scss']
})
export class CuisineItemsComponent implements OnInit {
  cuisineList: FourCuisines[] = [
    new FourCuisines('../../../../../assets/images/cuisines/lu-food.png', 'Shangdong Cuisine',
    'Shandong province border the sea, so Shandong cuisine deeply influenced by the sea food. People in Shandong like to use seasoning and flavoring to make cuisine more delicious. The cuisine is generally salty, with a prevalence of light-color sauces. The dishes feature selected materials, adept skill in slicing and perfect cooking techniques. Shandong cuisine is representative of northern China’s cooking and its techniques have been widely absorbed by the imperial dishes of Ming and Qing Dynasties.', '/cuisine/shangdong'),
    new FourCuisines('../../../../../assets/images/cuisines/yue-food.png', 'Cantonese Cuisine',
    'Guangdong Cuisine takes fine and rare ingredients and is cooked with polished skills and in a dainty style. It emphasizes a flavor which is clear but not light, refreshing but not common, tender but not crude. In summer and autumn it pursues clarity and in winter and spring, a little more substance. The sauteed dishes always rely upon exquisite presentat ion involving cutting and carving skills. In contrast to the fast-fried cooking method of Sichuan dishes, Guangdong people prefer to braise, stew and sauté their food. These cooking methods aim to preserve the flavor of the dishes.', '/cuisine/cantonese'),
    new FourCuisines('../../../../../assets/images/cuisines/sc-food.png', 'Sichuan Cuisine',
    'This combines the cuisines from Chengdu and Chongqing. From as early as the Qing Dynasty (1644 - 1911), books had systematically recorded a total of 38 cooking methods like to scald, wrap, bake, mix, stew, and adhere, etc. Sichuan Cuisine is the most widely served cuisine in China. The dishes of Sichuan Cuisine are famous for their hot and spicy flavor. An outstanding facet of Sichuan dishes is the delicate use of pepper or chili. The ingredients used are great in variety, including poultry, pork, beef, fish, vegetables and tofu.', '/cuisine/sichuan'),
    new FourCuisines('../../../../../assets/images/cuisines/hy-food.png', 'Huiyang Cuisine',
    'Huaiyang cuisine also called "Hui" is derived from the native cooking styles of the region surrounding the lower reaches of the Huai and Yangtze rivers, and centered upon the cities of Huai’an, Yangzhou and Zhenjiang in Jiangsu province. It is widely seen in Chinese culinary circles as the most popular and prestigious style of Jiangsu cuisine.', '/cuisine/huaiyang')
  ];

  constructor() { }

  ngOnInit() {
  }

}
