import { Component, OnInit , HostListener} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


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
    let apiUrl = 'http://localhost:8080/restaurants';
  
    this.httpClient.get<any[]>(apiUrl).subscribe((data) => {
      if (Array.isArray(data) && data.length > 0) {
        // Display results only if a search has been performed
        if (this.searchTerm) {
          data = data.filter(merchant =>
            merchant.merchantName.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        }
  
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / this.pageSize);
        this.totalpagesize = totalPages;
  
        // Calculate the start and end indices for the current page
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
    // Reset current page to 1 when search term changes
    this.currentPage = 1;
    // Fetch data with real-time search
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

  onDeleteUser(merchantUUID: string) {
    // Make an HTTP DELETE request to delete the user
    this.httpClient.delete(`http://localhost:8080/merchant/delete/${merchantUUID}`)
      .subscribe(
        response => {
          console.log(`User with UUID ${merchantUUID} deleted successfully.`);
          // Refresh the user list or update the UI as needed
          // You may want to refetch the user list or update it based on the response
          this.fetchMerchants();
        },
        error => {
          console.error(`Error deleting user with UUID ${merchantUUID}:`, error);
          // Handle the error, show a message, etc.
        }
      );
  }
}