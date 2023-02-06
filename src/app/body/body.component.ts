
import { Component } from '@angular/core';
import { InputsService } from '../inputs.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  data: any[];

  constructor(private dataService: InputsService) {
    this.data = this.dataService.data;
  }

  // deleteData(item:any) {
  //   this.dataService.deleteData(item);
  // }
  deleteData(i:number) {
    this.data.splice(i,1);
  }
}

