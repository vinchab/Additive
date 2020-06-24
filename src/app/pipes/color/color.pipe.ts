import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {
    let result 
    
    switch (true) {
      case value === '0':
        result = '#3AFF1C'
        break;
      case value === '1':
        result = '#FFEB0A'
        break;
      case value === '2':
        result = '#FA7703'
        break;
      case value === '3':
        result = '#FA1B11'
        break;

      default:
        break;
    }
    
    return result;
  }

}
