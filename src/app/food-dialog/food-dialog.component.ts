import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
import { Restaurantfood } from '../restaurant-detail/restaurant-detail.component'; // Adjust the path as needed
import { CartNotificationService } from '../cart-notification.service';
import { AuthService } from '../services/auth.service'; // Import AuthService

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
    private authService: AuthService 
  ) {
    this.food = data.food;
    this.uuid = this.authService.getUserUUID(); 
    this.merchantId = this.getMerchantIdFromUrl();
    console.log('FoodDialogComponent Data:', data);
  }
  

  addToCart() {
    this.cartService.addToCart(this.uuid,this.merchantId, this.food, this.quantity).subscribe(
      () => {
        // Handle success if needed
        
      },
      (error) => {
        console.error('Error adding to cart:', error);
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
