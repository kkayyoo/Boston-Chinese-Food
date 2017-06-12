import { Component, OnInit } from '@angular/core';
import { City } from '../mappings.model';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.scss']
})
export class MapSearchComponent implements OnInit {
  cityList: City[] = [
    new City('Boston', '../../../../../assets/images/map/boston.png'),
    new City('Brookline', '../../../../../assets/images/map/brookline.png'),
    new City('Cambridge', '../../../../../assets/images/map/cambridge.png'),
    new City('Malden', '../../../../../assets/images/map/malden.png'),
    new City('Medford', '../../../../../assets/images/map/medford.png'),
    new City('Quincy', '../../../../../assets/images/map/quincy.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
