import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory',
})
export class FilterCategoryPipe implements PipeTransform {
  transform(items: any[], selectedCategory: string): any[] {
    if (!items || !selectedCategory) {
      return items;
    }
    return items.filter((item) => item.type === selectedCategory);
  }
}
