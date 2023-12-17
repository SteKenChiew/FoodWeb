import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cusorderhistory',
  templateUrl: './cusorderhistory.component.html',
  styleUrls: ['./cusorderhistory.component.css']
})
export class CusorderhistoryComponent implements OnInit{
  orderHistory: any[] = [];
  userUuid: any;

  constructor(private orderService: OrderService, private authService: AuthService) {}

  ngOnInit(): void {
    console.log('CusactiveorderComponent initialized');
    this.fetchUserOrderHistory();

   
  }
  fetchUserOrderHistory() {
    const userUuid = this.authService.getUserUUID();
    console.log(userUuid)
    this.orderService.getUserOrderHistory(userUuid)
      .subscribe(
        (orders: any[]) => {
          console.log('Fetched orders:', orders);
          this.orderHistory = orders;
          console.log('Component order history:', this.orderHistory);
        },
        error => {
          console.error('Error fetching orders:', error);
        }
      );
  }

  formatOrderPlacedDateTime(orderPlacedDateTime: string): string {
    if (!orderPlacedDateTime) {
      return ''; // Skip null values
    }
  
    const dateObject = new Date(orderPlacedDateTime);
  
    // Format the date as "12/15/2023 02:36 AM"
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true // Use 12-hour clock
    }).format(dateObject);
  }
}
