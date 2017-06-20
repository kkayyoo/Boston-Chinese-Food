import { Component, OnInit } from '@angular/core';
import { FeaturedFood } from '../../../shared/food.model';

@Component({
  selector: 'app-lu-food',
  templateUrl: './lu-food.component.html',
  styleUrls: ['./lu-food.component.scss']
})
export class LuFoodComponent implements OnInit {

  foodList: FeaturedFood[] = [
    new FeaturedFood('Sweet and Sour Carp', '../../../../../assets/images/cuisines/food/lu-food.png',
    'This is a famous traditional dish of Shandong province, and legend has it that it rose to fame in a small town by the Yellow River. This golden brown, crisp fish will certainly be fresh if you order it in Shandong, and the fragrant smell along with the sweet and sour tastes are sure to leave you satisfied.'),
    new FeaturedFood('Stewed Pork Hock', '../../../../../assets/images/cuisines/food/zhouzi.png',
    'Stewed pork hock is traditional Lu cuisine that is good in color, flavor and taste. The pork hock is scraped clean, cut into 2-cm square pieces and boil in water added scallion, ginger and pepper until soft. Fish out the pork hock, when the soup solidified, put the pork hock again until frozen. Dip in garlic paste when taking it.'),
    new FeaturedFood('Dezhou Stewed Chicken', '../../../../../assets/images/cuisines/food/dezhou-chicken.png',
    'It’s one of the typical Shandong cuisines, stewed with honey, fennel, sugar and other condiments for several hours. In the 1950’s, Dezhou stewed chicken is eaten by president Mao, then it’s known throughout the country. The chicken is so well cooked, although the shape of the chicken is preserved, the meat easily separates from the bone.'),
    new FeaturedFood('Chicken Ball in Milk Soup', '../../../../../assets/images/cuisines/food/milk_soup.png',
    'People in Shandong like to use milk to make soup. Milk soup is a symbol of Shandong cuisine. The main materials of this cuisine are chicken breast and water chestnut. Cush the chicken breast and water chestnut into muddy shape, then stewed with milk and water for several hours. The soup is full of fragrance with milk and chicken.')
  ];


  constructor() { }

  ngOnInit() {
  }

}
