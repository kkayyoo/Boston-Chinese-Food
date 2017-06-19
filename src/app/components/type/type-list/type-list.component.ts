import { Component, OnInit } from '@angular/core';
import { Types } from '../types.model';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {
  typeList: Types[] = [];

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.typeList = this.typeService.getTypes();
  }


}
