import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  @Input() holder : string='';
  @Output() childToParent = new EventEmitter();
  dataToInputs(event:Event){
    this.childToParent.emit(event);
  }

}
