import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cantonese',
  templateUrl: './cantonese.component.html',
  styleUrls: ['./cantonese.component.scss']
})
export class CantoneseComponent implements OnInit {
  headerImage: string = '../../../../../assets/images/cuisines/gz-bg.png';

  constructor() { }

  ngOnInit() {
  }

}
