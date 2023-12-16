import { Component, OnInit, OnDestroy } from '@angular/core';
import { MerchantauthService } from '../services/merchantauth.service';
import { OrderService } from '../services/order.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-merchantmain',
  templateUrl: './merchantmain.component.html',
  styleUrls: ['./merchantmain.component.css']
})
export class MerchantmainComponent implements OnInit, OnDestroy {
  merchantUuid: any;
  merchantName: any;
  totalSalesToday: number = 0.00;
  activeOrdersSize: number = 0;
  readyOrdersSize: number = 0;

  // Initialize with undefined
  private updateSubscription: Subscription | undefined;

  constructor(private orderService: OrderService, private merchantauthService: MerchantauthService) {}

  ngOnInit(): void {
    this.merchantUuid = this.merchantauthService.getMerchantUUID();
    this.merchantName = this.merchantauthService.getmerchantName();

    // Initial data fetch
    this.updateData();

    // Set up a timer to update data every 5 minutes (adjust the interval as needed)
    this.updateSubscription = interval(300).subscribe(() => {
      this.updateData();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the timer to avoid memory leaks
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  private updateData(): void {
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
