import { Component, OnInit } from '@angular/core';

import { City } from './mappings.model';
import { MappingService } from './mapping.service';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],
  providers: [MappingService]
})
export class MappingComponent implements OnInit {
  selectedMap: City;

  constructor(private mappingService: MappingService) { }

  ngOnInit() {
      this.mappingService.mapSelected
        .subscribe(
            (mapping: City) => {
                this.selectedMap = mapping;
            }
        )
  }

}
