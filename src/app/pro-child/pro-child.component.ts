import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pro-child',
  templateUrl: './pro-child.component.html',
  styleUrls: ['./pro-child.component.css']
})
export class ProChildComponent {

  @ContentChild('headlines')
  element!: ElementRef;

  show(){
    console.log(this.element.nativeElement);
  }
}
