import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: string): string {
    let result = 'rien'
    
    switch (true) {
      case value === '0':
        result = 'accéptable'
        break;
      case value === '1':
        result = 'pas top'
        break;
      case value === '2':
        result = 'tu va mourire'
        break;
      case value === '3':
        result = "tu es mort"
        break;
      
      default:
        break;
    }
    
    return result;
  }

}
