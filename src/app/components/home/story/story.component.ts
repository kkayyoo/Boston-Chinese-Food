import { Component, OnInit } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
