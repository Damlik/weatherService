import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windMs'
})
export class WindMsPipe implements PipeTransform {
  transform(value: string, args?: any): string {

    return value + " M/s";
  }
}
