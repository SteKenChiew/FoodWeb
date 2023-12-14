import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MerchantauthService } from '../services/merchantauth.service';


@Component({
  selector: 'app-orderpreparingpage',
  templateUrl: './orderpreparingpage.component.html',
  styleUrls: ['./orderpreparingpage.component.css']
})
export class OrderpreparingpageComponent implements OnInit {
  activeOrders: any[] = [];
  merchantUuid: any;

  constructor(private orderService: OrderService, private merchantauthService: MerchantauthService) {
 
  }

  ngOnInit(): void {
    this.fetchMerchantActiveOrders();
  }

  fetchMerchantActiveOrders() {
    const merchantUuid = this.merchantauthService.getMerchantUUID(); // Invoke the method
    this.orderService.getMerchantActiveOrders(merchantUuid)
      .subscribe(
        (orders: any[]) => {
          this.activeOrders = orders;
          console.log('Fetched orders:', this.activeOrders);
        },
        error => {
          console.error('Error fetching orders:', error);
        }
      );
  }
  
}
