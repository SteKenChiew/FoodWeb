import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAdditional',
})
export class FilterAdditionalPipe implements PipeTransform {
  transform(items: any[], additionalFilter: string): any[] {
    if (!items || !additionalFilter) {
      return items;
    }

    return items.filter((item) => {
      const category = item.category;
      return category && category.toLowerCase() === additionalFilter.toLowerCase();
    });
  }
}

