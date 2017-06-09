import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Story } from '../stories.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-items',
  templateUrl: './story-items.component.html',
  styleUrls: ['./story-items.component.scss']
})
export class StoryItemsComponent implements OnInit {
  @Input() index: number;
  id: number;
  story: Story;

  storyList: Story[];

  constructor(private storyService: StoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.storyList = this.storyService.getStories();
      this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.story = this.storyService.getStory(this.id);
            }
        );
  }


}
