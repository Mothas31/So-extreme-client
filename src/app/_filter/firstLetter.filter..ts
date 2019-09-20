import { Pipe, PipeTransform, Injectable } from '@angular/core'

@Pipe({name: 'firstLetterFilter'})

@Injectable()

export class FirstLetterFilterPipe implements PipeTransform {
  transform(_value: string): string {
    if (_value) {
      return _value.substring(0, 1)
    }
    return null;
  }
}