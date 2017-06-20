import { Component, OnInit } from '@angular/core';
import { FeaturedFood } from '../../../shared/food.model';

@Component({
  selector: 'app-yue-food',
  templateUrl: './yue-food.component.html',
  styleUrls: ['./yue-food.component.scss']
})
export class YueFoodComponent implements OnInit {

  yueFoodList: FeaturedFood[] = [
    new FeaturedFood('Dry-Fried Beef and Noodles', '../../../../../assets/images/cuisines/food/beefnoodles.png',
    'Beef chow fun or stir fried rice noodles with beef is a popular Cantonese noodle dish in domestic and overseas Chinese restaurants. It seems like a simple dish, but it requires considerable stir fry skills to make properly. Actually, preparation of this dish is widely used as an entry-level test for someone applying to be a chef in a Cantonese restaurant.'),
    new FeaturedFood('BBQ Pork ( Char Siu )', '../../../../../assets/images/cuisines/food/bbqpork.png',
    'BBQ Pork ( Char Siu ) is one of the famous Cantonese dishes. It can be directly served with rice, noodle, beer, or tea. It can also be one ingredient to make other recipes, stir fry with vegetable, or to stir fry with rice, of course, it is so famous of dim sum BBQ Pork Bun. Guangdong Roasted cuisines (Hong Kong Styles) are so famous all over the world, you can see the roasted meats shops every where in Hong Kong, Guangdong and in any Chinatown.'),
    new FeaturedFood('Dim Sum', '../../../../../assets/images/cuisines/food/dimsum.png',
    'Dim sum is a collective name. It includes variety of desserts, snacks and wheaten food. Based on the local food, Canton dim sum gathers advantages of both Chinese flour dim sums and Western style of cakes and deserts. It is characterized by its ingredients, variety, styles, tastes and diversity. The most popular and common dim sum includes shrimp dumplings, char siu bao, spring rolls and sea-food gruel and so on.'),
    new FeaturedFood('Double Layer Milk Cream', '../../../../../assets/images/cuisines/food/double_layer_milk.png',
    'Double layer milk cream is regarded as the most popular and classic dessert in Canton province. It is sweet, fragrant and slippery. The cooking method is like: boil the milk and pour it into a small bowl. Cool it until the milk becomes hard on surface. Pour out the milk carefully but remain the cream at the bottom of the bowl. Add some sugar into fresh milk and stir evenly. Filtrate the fresh milk and put it into the cream milk, cover it and steam for about 15 minutes.')
  ];


  constructor() { }

  ngOnInit() {
  }

}
