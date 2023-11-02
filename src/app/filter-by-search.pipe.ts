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
      // Modify this condition based on your specific search requirements
      return item.name.toLowerCase().includes(searchText);
    });

    

    return filteredItems;
  }
}
