import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../stories.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-items',
  templateUrl: './story-items.component.html',
  styleUrls: ['./story-items.component.scss']
})
export class StoryItemsComponent implements OnInit {

  storyList: Story[];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
      this.storyList = this.storyService.getStories();
  }


}
