import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch',
})
export class FilterBySearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    // Convert searchText to lowercase for a case-insensitive search
    searchText = searchText.toLowerCase();

    const filteredItems = items.filter((item) => {
      // Log the item to identify which one is causing the issue
      console.log('Current Item:', item);

      // Make sure the item is defined and has the 'itemName' property
      if (item && item.itemName) {
        return item.itemName.toLowerCase().includes(searchText);
      } else {
        return false; // Or handle this case based on your requirements
      }
    });

    return filteredItems;
  }
}
