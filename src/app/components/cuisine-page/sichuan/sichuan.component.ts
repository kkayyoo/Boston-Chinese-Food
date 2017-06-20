import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sichuan',
  templateUrl: './sichuan.component.html',
  styleUrls: ['./sichuan.component.scss']
})
export class SichuanComponent implements OnInit {
  headerImage: string = '../../../../../assets/images/cuisines/chuan-bg.png';

  constructor() { }

  ngOnInit() {
  }

}
