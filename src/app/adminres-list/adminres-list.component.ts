import { Component, OnInit , HostListener} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
interface Restaurant {
  id: number;
  uuid: string;
  img: string;
  name: string;
  religion: string;
  estimatedtime: string;
  rating: number;
}


@Component({
  selector: 'app-adminres-list',
  templateUrl: './adminres-list.component.html',
  styleUrls: ['./adminres-list.component.css']
})
export class AdminresListComponent implements OnInit{
  shop: Restaurant[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5; 
  totalpagesize: number = 0;
  constructor(private httpClient: HttpClient,private router: Router) {}
  ngOnInit() {
    this.fetchMerchants();
  }
  

  fetchMerchants() {
    this.httpClient.get<any[]>('http://localhost:8080/restaurants').subscribe((data) => {
      if (Array.isArray(data) && data.length > 0) {
        // Calculate total pages based on the total number of items and the page size
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / this.pageSize);
        this.totalpagesize = totalPages;
        // Ensure currentPage does not exceed the total number of pages
        this.currentPage = Math.min(this.currentPage, totalPages);
  
        // Calculate start and end indices for pagination
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = Math.min(startIndex + this.pageSize, totalItems);
  
        // Slice the array to get the current page's data
        this.shop = data.slice(startIndex, endIndex).map((merchant, index) => ({
          id: index + 1,
          uuid: merchant.uuid,
          img: merchant.merchantImage,
          name: merchant.merchantName,
          religion: merchant.merchantType,
          estimatedtime: merchant.duration,
          rating: 4.0,
        }));
      }
    });
  }
  
  openRestaurantDetail(shop: any) {
    this.router.navigate(['/restaurant-detail', shop.uuid, shop.name]);
  }

  onSearchChange() {
    // Reset current page when search term changes
    this.currentPage = 1;
    this.fetchMerchants();
  }
  changePage(offset: number) {
    this.currentPage += offset;
    this.fetchMerchants();
  }

  totalPages(): number {
    const totalItems = this.shop.length;
    return Math.ceil(totalItems / this.pageSize);
  }
}