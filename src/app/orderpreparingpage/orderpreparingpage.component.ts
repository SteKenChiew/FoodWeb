import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MerchantauthService } from '../services/merchantauth.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-orderpreparingpage',
  templateUrl: './orderpreparingpage.component.html',
  styleUrls: ['./orderpreparingpage.component.css']
})
export class OrderpreparingpageComponent implements OnInit {
  activeOrders: any[] = [];
  merchantUuid: any;

  constructor(private orderService: OrderService, private merchantauthService: MerchantauthService) {}

  ngOnInit(): void {
    this.fetchMerchantActiveOrders();

    // Set up a timer to fetch active orders every 30 seconds (adjust the interval as needed)
    interval(5000).subscribe(() => {
      this.fetchMerchantActiveOrders();
    });
  }

  fetchMerchantActiveOrders() {
    const merchantUuid = this.merchantauthService.getMerchantUUID();
    this.orderService.getMerchantActiveOrders(merchantUuid)
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

  markOrderAsReady(orderId: string) {
    const merchantUuid = this.merchantauthService.getMerchantUUID();
    this.orderService.markOrderAsReady(merchantUuid, orderId)
      .subscribe(
        () => {
          console.log('Order marked as ready successfully');
          // You may want to refresh the list of active orders after marking an order as ready
          this.fetchMerchantActiveOrders();
        },
        error => {
          console.error('Error marking order as ready:', error);
        }
      );
  }
}
