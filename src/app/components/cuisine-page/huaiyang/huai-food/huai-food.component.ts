import { Component, OnInit } from '@angular/core';
import { FeaturedFood } from '../../../shared/food.model';

@Component({
  selector: 'app-huai-food',
  templateUrl: './huai-food.component.html',
  styleUrls: ['./huai-food.component.scss']
})
export class HuaiFoodComponent implements OnInit {

  huaiFoodList: FeaturedFood[] = [
    new FeaturedFood('Yangzhou Fried Rice', '../../../../../assets/images/cuisines/food/firedrice.png',
    'Yangzhou fried rice is the classic dish in the city of Yangzhou, which is also very popular in Europe, America, Japan, HongKong. Day-old rice is the necessary because the freshly cooked rice is too sticky. Eggs are scrambled before mixed with the fried rice. The other variations include cooked shrimp, ham, green beans, carrots, peas, corn, bamboo shoots, green onion, etc. According to the legend, Yangzhou fried rice was brought into Yangzhou by Emperor Yang of Sui Dynasty when he was visited Yangzhou.'),
    new FeaturedFood('Wensi Tofu', '../../../../../assets/images/cuisines/food/wensitufu.png',
    'Wensi Tofu is a kind of notable traditional dish in Huaiyang cuisine with a long and profound history. It is strict in material election and fine in cutting technique. It is soft and melts in your mouth, which is the ideal choice for elder and child. Legend it was invented by a monk named Wensi in the Years of Emperor Qianlong, Qing Dynasty, who was good for tofu dishes. Dofu together with other variations such as mushroom, winter bamboo shoots, ham, chicken breast, etc are cut into shred in consistence with thickness, and then burned in the bean soup.'),
    new FeaturedFood('Stewed Large Meatball', '../../../../../assets/images/cuisines/food/meatball.png',
    'Large Meatball’s reputation stretches far and wide. It is also called "Lion Head". The commonly used cutting method – "flat cutting" is employed. This dish can be a test of chefs’ cutting skills. Streaky pork is expertly cut rather than chopped into pomegranate seed-sized portions so that the particles can be more easily pinched into meatballs. After simmered in prepared soup for two hours, the meatballs are still round. But it’s not the ending. The meatballs will be fish out and put into another pot of clear chicken soup to have a more pure taste.'),
    new FeaturedFood('Boiled Tofu Shreds', '../../../../../assets/images/cuisines/food/gansi.png',
    'Apart from steamed buns, Boiled Tofu Shreds is served on the breakfast table of Yangzhou. Boiled Tofu Shreds is also known as Dried Tofu Shreds. It is by no means easy to cut them into countless same-size shreds. Cutting skill is of course crucial, what’s more important, a peaceful mind. It is normal to see the finger skin of a culinary novice wore down by kitchen knife. You can imagine. Hundreds of tofu shreds are scattered only when they are soaked into water. After the bitter is washed away, they will be embraced by delicate flavors. Each piece of tofu is loaded with superior taste and nutrition in clear chicken soup and fresh ingredients.')
  ];


  constructor() { }

  ngOnInit() {
  }

}
