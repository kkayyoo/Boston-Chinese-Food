import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Types } from '../types.model';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.scss']
})
export class TypeItemComponent implements OnInit {
  type: Types;
  id: number;

  constructor(private typeService: TypeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.type = this.typeService.getType(this.id);
          }
        );
  }

}
