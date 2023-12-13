import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  bookingId: string ='';
  order: any; // Replace 'any' with the actual type of your order
  uuid: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
  ) {this.uuid = this.authService.getUserUUID();}

  ngOnInit() {
    // Extract bookingId from the route parameter
    this.activatedRoute.params.subscribe(params => {
      this.bookingId = params['bookingId'];
      // Call the backend API to retrieve order details based on bookingId
      this.getOrderDetails();
    });
  }

  getOrderDetails() {
    // Ensure there's a slash between bookingId and uuid
    const backendUrl = 'http://localhost:8080/user/order-summary/' + this.uuid + '/' + this.bookingId;
    
    this.http.get(backendUrl).subscribe(
      (response: any) => {
        this.order = response;
        console.log('Order details:', this.order);
      },
      error => {
        if (error.status === 404) {
          console.log('Order not found.');
          // Handle the case when the order is not found
        } else {
          console.error('Error fetching order details:', error);
          // Handle other errors as needed
        }
      }
    );
  }
  
}
