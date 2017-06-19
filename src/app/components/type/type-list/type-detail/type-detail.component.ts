import { Component, OnInit, Input } from '@angular/core';

import { Types } from '../../types.model';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss']
})
export class TypeDetailComponent implements OnInit {
  @Input() type: Types;
  @Input() index: number;

  ngOnInit() {
  }

}
