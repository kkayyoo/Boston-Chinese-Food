import { Component, OnInit } from '@angular/core';
import { Types } from './types.model';
import { TypeService } from './type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  providers: [TypeService]
})
export class TypeComponent implements OnInit {
  selectedType: Types;
  headerImage: string = '../../../../../assets/images/search/chinese-food1.png';

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.typeService.typeSelected
      .subscribe(
          (type: Types) => {
              this.selectedType = type;
          }
      );
  }

}
