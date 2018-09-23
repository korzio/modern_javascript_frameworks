import { Directive } from '@angular/core';

@Directive({
  selector: '[appWakaWakaWaka]'
})
export class WakaWakaDirective {
  constructor() {
    console.log('waka-waka-waka')
  }
}
