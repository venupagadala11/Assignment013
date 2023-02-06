import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string="";
  age: number=0;
  people: { name: string; age: number }[] = [];

  ngOnInit() {
    // initialize the people array
  }

}

