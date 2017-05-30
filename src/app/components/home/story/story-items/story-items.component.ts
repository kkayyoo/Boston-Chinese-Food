import { Component, OnInit } from '@angular/core';
import { Story } from '../stories.model';

@Component({
  selector: 'app-story-items',
  templateUrl: './story-items.component.html',
  styleUrls: ['./story-items.component.scss']
})
export class StoryItemsComponent implements OnInit {
  storyList: Story[] = [
    new Story('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new Story('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food'),
    new Story('http://maxpixel.freegreatpicture.com/static/photo/1x/Cocktail-Party-Recipe-Drink-Alcohol-Pisco-Sour-831768.jpg', 'ABC Food'),
    new Story('http://maxpixel.freegreatpicture.com/static/photo/1x/Drink-Recipe-Pisco-Sour-Cocktail-Alcohol-Party-829477.jpg', 'XYZ Food')
  ];

  constructor() { }

  ngOnInit() {
  }

}
