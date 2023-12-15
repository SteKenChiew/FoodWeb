import { Component, OnInit } from '@angular/core';
import { MerchantauthService } from '../services/merchantauth.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-merchantmain',
  templateUrl: './merchantmain.component.html',
  styleUrls: ['./merchantmain.component.css']
})
export class MerchantmainComponent implements OnInit {
  merchantUuid: any;
  merchantName: any;
  totalSalesToday: number = 0.00;
  activeOrdersSize: number = 0;
  readyOrdersSize: number = 0;

  constructor(private orderService: OrderService, private merchantauthService: MerchantauthService) {}

  ngOnInit(): void {
    this.merchantUuid = this.merchantauthService.getMerchantUUID();
    this.merchantName = this.merchantauthService.getmerchantName();

    // Get the size of active orders
    this.orderService.getActiveOrdersSize(this.merchantUuid).subscribe(size => {
      this.activeOrdersSize = size;
    });

    // Get the size of ready orders
    this.orderService.getReadyOrdersSize(this.merchantUuid).subscribe(size => {
      this.readyOrdersSize = size;
    });

    this.orderService.getMerchantTotalSalesToday(this.merchantUuid).subscribe(totalSales => {
      this.totalSalesToday = totalSales;
    });
  }
}
