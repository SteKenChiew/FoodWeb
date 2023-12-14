import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MerchantauthService } from '../services/merchantauth.service';
@Component({
  selector: 'app-orderhistorypage',
  templateUrl: './orderhistorypage.component.html',
  styleUrls: ['./orderhistorypage.component.css']
})
export class OrderhistorypageComponent  implements OnInit {

  orderHistory: any[] = [];
  merchantUuid: any;

  constructor(private orderService: OrderService, private merchantauthService: MerchantauthService) {
 
  }

  ngOnInit(): void {
    this.fetchMerchantOrderHistory();
  }

  fetchMerchantOrderHistory() {
    const merchantUuid = this.merchantauthService.getMerchantUUID(); // Invoke the method
    this.orderService.getMerchantOrderHistory(merchantUuid)
  .subscribe(
    (orders: any[]) => {
      console.log('Fetched orders:', orders);
      this.orderHistory = orders;
      console.log('Component orderHistory:', this.orderHistory);
    },
    error => {
      console.error('Error fetching orders:', error);
    }
  );

}
}
