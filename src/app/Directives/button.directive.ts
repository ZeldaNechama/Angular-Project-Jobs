import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  // background-color:rgb(241, 134, 95);
  // color: #fff;
  // border-color: orangered;

  constructor(private elementr: ElementRef) { 
    elementr.nativeElement.style.color="#fff";
    elementr.nativeElement.style.backgroundColor="rgb(241, 134, 95)";
    elementr.nativeElement.style.borderColor="orangered";
    elementr.nativeElement.style.borderRadius= "25px 25px";

  }

}
