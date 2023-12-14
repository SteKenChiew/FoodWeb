import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MerchantauthService } from '../services/merchantauth.service';

@Component({
  selector: 'app-readyorderpage',
  templateUrl: './readyorderpage.component.html',
  styleUrls: ['./readyorderpage.component.css']
})
export class ReadyorderpageComponent implements OnInit {
  readyOrders: any[] = [];
  merchantUuid: any;

  constructor(private orderService: OrderService, private merchantauthService: MerchantauthService) {
 
  }


  ngOnInit(): void {
    this.fetchMerchantReadyOrders();
  }
  fetchMerchantReadyOrders() {
    const merchantUuid = this.merchantauthService.getMerchantUUID(); // Invoke the method
    this.orderService.getMerchantReadyOrders(merchantUuid)
  .subscribe(
    (orders: any[]) => {
      console.log('Fetched orders:', orders);
      this.readyOrders = orders;
      console.log('Component activeOrders:', this.readyOrders);
    },
    error => {
      console.error('Error fetching orders:', error);
    }
  );

  }
  markOrderAsDone(orderId: string) {
    const merchantUuid = this.merchantauthService.getMerchantUUID();
    this.orderService.markOrderAsDone(merchantUuid, orderId)
      .subscribe(
        () => {
          console.log('Order marked as ready successfully');
          // You may want to refresh the list of active orders after marking an order as ready
          this.fetchMerchantReadyOrders();
        },
        error => {
          console.error('Error marking order as ready:', error);
        }
      );
  }

}
