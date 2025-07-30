import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { text } from 'node:stream/consumers';

@Directive({
  selector: '[appFormatText]',
  standalone: false
})
export class FormatText {

  constructor(
    private el: ElementRef,
    private toastr: ToastrService
  ) { }

  @HostListener('keyup', ['$event'])
  foo(event: any) {
    const textField: string = event.target.value;

    if (textField.length == 2) {
      event.target.value = textField.substring(0,2).concat('/').concat(textField.substring(2))
    }

    if (textField.length == 5) {
      event.target.value = textField.substring(0,5);
    }
  }

  /*
  @HostListener('keyup', ['$event'])
  onKeyUp(event: any) {
    const textField: string = event.target.value;

    if (textField.length == 2) {
      event.target.value = textField.substring(0,2).concat('/').concat(textField.substring(2))
    }

    if (textField.length == 5) {
      event.target.value = textField.substring(0,5);
    }
  }
  */
}
