import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMerchant'
})
export class FilterMerchantPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.religion.toLowerCase().includes(searchText) ||
        item.uuid.toLowerCase().includes(searchText)
      );
    });
  }
}
