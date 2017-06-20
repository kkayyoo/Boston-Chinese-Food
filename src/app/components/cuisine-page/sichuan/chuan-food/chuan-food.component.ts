import { Component, OnInit } from '@angular/core';
import { FeaturedFood } from '../../../shared/food.model';

@Component({
  selector: 'app-chuan-food',
  templateUrl: './chuan-food.component.html',
  styleUrls: ['./chuan-food.component.scss']
})
export class ChuanFoodComponent implements OnInit {

  chuanFoodList: FeaturedFood[] = [
    new FeaturedFood('Kung Pao Chicken', '../../../../../assets/images/cuisines/food/kongpao.png',
    'Kung Pao Chicken is the most famous Sichuan dish outside China. There are many versions but generally it is a stir-fried dish with chicken cubes, dried chili pepper and deep-fried peanuts. Real Kung Pao Chicken contains no fresh peppers or other side ingredients in order to make the taste pure. The tender taste of the chicken matches with the crispy peanuts. This sweet, sour and spicy chicken dish is worth trying.'),
    new FeaturedFood('Sichuan Boiled Fish', '../../../../../assets/images/cuisines/food/fish.png',
    'If you ever visit a Sichuan restaurant, a boiled dish is a must. Water boiling is a unique cooking method from Sichuan cuisine. Usually heavy seasonings including Doubanjiang, chili peppers, ginger, Sichuan peppercorns and other common seasonings are used in the basic soup base and then beef, pork, fish, blood tofu are cooked along with other side ingredients. The key step of all boiled dishes is the pouring of hot oil on the surface after the main dish is done. This process helps to give the dish a brighter color and a stronger taste. You may find boiled pork, boiled fish and boiled beef. Usually there are other side ingredients inside the boiled dishes such as bean sprouts, cucumber or mushrooms.'),
    new FeaturedFood('Twice-Cooked Pork', '../../../../../assets/images/cuisines/food/twicepork.png',
    'Literally called “back-in-the-pot-meat,” the dish is so named because the fatty pork belly (which the Chinese consider more flavorful than lean meat) is first boiled, before it is stir-fried in a wok with spices and leeks. This dish is generally on the less spicy end of Sichuan cuisine, and offers pork rich with juicy flavors.'),
    new FeaturedFood('Mapo Tofu', '../../../../../assets/images/cuisines/food/mapotufu.png',
    'The signature mapo tofu from Chengdu utilizes the famous Sichuan peppercorn powder and chili bean paste sauce that gets easily soaked up by the soft tofu and is served bubbling in a hot cast-iron pot. The tofu should be so soft that chopsticks slice right through it. In Chengdu, one of the most famous Mapo Tofu restaurants in the world is Chen Mapo Tofu.')
  ];


  constructor() { }

  ngOnInit() {
  }

}
