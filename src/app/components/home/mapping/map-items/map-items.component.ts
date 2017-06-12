import { Component, OnInit, Input } from '@angular/core';

import { City } from '../mappings.model';
import { MappingService } from '../mapping.service';

@Component({
  selector: 'app-map-items',
  templateUrl: './map-items.component.html',
  styleUrls: ['./map-items.component.scss']
})
export class MapItemsComponent implements OnInit {
  @Input() mapping: City;

  constructor() { }

  ngOnInit() {
  }

}
