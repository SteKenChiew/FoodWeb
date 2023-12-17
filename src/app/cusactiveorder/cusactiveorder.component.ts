import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cusactiveorder',
  templateUrl: './cusactiveorder.component.html',
  styleUrls: ['./cusactiveorder.component.css']
})
export class CusactiveorderComponent implements OnInit{
  activeOrders: any[] = [];
  userUuid: any;

  constructor(private orderService: OrderService, private authService: AuthService) {}

  ngOnInit(): void {
    console.log('CusactiveorderComponent initialized');
    this.fetchUserActiveOrders();

    // Set up a timer to fetch active orders every 30 seconds (adjust the interval as needed)
    interval(5000).subscribe(() => {
      this.fetchUserActiveOrders();
    });
  }
  fetchUserActiveOrders() {
    const userUuid = this.authService.getUserUUID();
    console.log(userUuid)
    this.orderService.getUserActiveOrders(userUuid)
      .subscribe(
        (orders: any[]) => {
          console.log('Fetched orders:', orders);
          this.activeOrders = orders;
          console.log('Component activeOrders:', this.activeOrders);
        },
        error => {
          console.error('Error fetching orders:', error);
        }
      );
  }
}
