
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputsService {
  data: any[] = [];

  addData(item:any) {
    this.data.push(item);
  }

  // deleteData(item:any) {
  //   this.data = this.data.splice(item,0);
  // }
}
