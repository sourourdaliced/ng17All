import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTableElement',
  standalone: true
})
export class RemoveTableElementPipe implements PipeTransform {

  transform(array: unknown[], ...args: unknown[]): unknown[] {
    return array.filter(element => !args.includes(element));
  }

}
