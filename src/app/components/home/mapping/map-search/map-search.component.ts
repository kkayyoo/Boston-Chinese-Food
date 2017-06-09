import { Component, OnInit } from '@angular/core';
import { City } from '../mappings.model';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.scss']
})
export class MapSearchComponent implements OnInit {
  cityList: City[] = [
    new City('Boston', '../../../../../assets/image/map/boston.png'),
    new City('Brookline', '../../../../../assets/image/map/brookline.png'),
    new City('Cambridge', '../../../../../assets/image/map/cambridge.png'),
    new City('Malden', '../../../../../assets/image/map/malden.png'),
    new City('Medford', '../../../../../assets/image/map/medford.png'),
    new City('Quincy', '../../../../../assets/image/map/quincy.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
