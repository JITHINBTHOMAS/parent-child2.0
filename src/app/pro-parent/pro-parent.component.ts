import { Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pro-parent',
  templateUrl: './pro-parent.component.html',
  styleUrls: ['./pro-parent.component.css']
})
export class ProParentComponent {
  @ViewChild('sometext')
  element!: ElementRef;

  show(){
    console.log(this.element.nativeElement);
  }

  ngOnInit():void{
    console.log('from ngOnInit() ...');
  }
  ngOnChange(changes:SimpleChanges):void{
    console.log('from ngOnChange() ...');
  }
  ngOnDestroy():void{
    console.log("ngOnDestroy");
  }
  ngDoCheck(){
    console.log("Docheck");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewCheck");
  }
  
}
