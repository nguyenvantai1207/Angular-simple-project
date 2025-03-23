import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe',
  standalone: true,
})
export class EmailPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.includes('@') ? value : `${value}@example.com`;
  }
}
