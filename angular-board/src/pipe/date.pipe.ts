import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'customDate',
})

//         <!-- $ npm i dayjs -->
export class DatePipe implements PipeTransform {
  transform(date: string): string {
    return dayjs(date).format('YYYY-MM-DD hh:mm');
  }
}
