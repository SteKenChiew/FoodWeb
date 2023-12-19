import { Component, Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
import { Restaurantfood } from '../restaurant-detail/restaurant-detail.component'; // Adjust the path as needed
import { CartNotificationService } from '../cart-notification.service';
import { AuthService } from '../services/auth.service'; // Import AuthService
import { Router, NavigationEnd  } from '@angular/router';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-food-dialog',
  templateUrl: './food-dialog.component.html',
  styleUrls: ['./food-dialog.component.css']
})
export class FoodDialogComponent {
  food: Restaurantfood; 
  quantity: number = 1;
  uuid: string;
  merchantId: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService, 
    private cartNotificationService: CartNotificationService,
    private authService: AuthService ,
    private dialogRef: MatDialogRef<FoodDialogComponent>,
    private router: Router
  ) {
    this.food = data.food;
    this.uuid = this.authService.getUserUUID(); 
    this.merchantId = this.getMerchantIdFromUrl();
    console.log('FoodDialogComponent Data:', data);
    router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // Check if the navigation ends at the login page
      if (event.url === '/login') {
        window.scrollTo(0, 0); // Scroll to the top
      }
    });
    
  }
 

  addToCart() {
    this.cartService.addToCart(this.uuid,this.merchantId, this.food, this.quantity).subscribe(
      () => {
        // Handle success if needed
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error adding to cart:', error);
        this.dialogRef.close();
        alert("Please login")
        this.router.navigate(['/login']);
      }
    );
  }
  
  
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  private getMerchantIdFromUrl(): string {
    const urlParts = window.location.href.split('/');
    const merchantIdIndex = urlParts.indexOf('restaurant-detail') + 1;
    
    if (merchantIdIndex < urlParts.length) {
      return urlParts[merchantIdIndex];
    } else {
      return '';
    }
  }
}
