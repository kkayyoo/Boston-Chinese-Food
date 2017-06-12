import { Component, OnInit, Input } from '@angular/core';

import { City } from '../../mappings.model';
import { MappingService } from '../../mapping.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
  @Input() mapping: City;

  constructor(private mappingService: MappingService) { }

  ngOnInit() {
  }

  onSelected() {
      this.mappingService.mapSelected.emit(this.mapping);
  }

}
