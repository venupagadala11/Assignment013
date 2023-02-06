  import { Component } from '@angular/core';
  import { InputsService } from '../inputs.service';
  
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

  })
  export class HeaderComponent {
    name: any;
    description: any;
    nameHolder:string="enter your name";
    descHolder:string="enter your description";

  
    constructor(private dataService: InputsService) {}
  
    addData() 
    {
      this.dataService.addData({ name: this.name, description: this.description });  
   
    }
    
    getName(event:Event)
    {
      this.name = (<HTMLInputElement>event.target).value;
    }
    getDisc(event : Event)
    {
      this.description = (<HTMLInputElement>event.target).value;
  }
  }
