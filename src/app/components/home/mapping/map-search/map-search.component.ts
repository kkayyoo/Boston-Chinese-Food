import { Component, OnInit } from '@angular/core';

import { City } from '../mappings.model';
import { MappingService } from '../mapping.service';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.scss']
})
export class MapSearchComponent implements OnInit {
  cityList: City[];

  constructor(private mappingService: MappingService) { }

  ngOnInit() {
      this.cityList = this.mappingService.getMaps();
  }

}
