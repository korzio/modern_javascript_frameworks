import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tran'
})
export class TranPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
