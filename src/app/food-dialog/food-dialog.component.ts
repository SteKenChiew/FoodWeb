import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
import { Restaurantfood } from '../restaurant-detail/restaurant-detail.component'; // Adjust the path as needed
import { CartNotificationService } from '../cart-notification.service';

@Component({
  selector: 'app-food-dialog',
  templateUrl: './food-dialog.component.html',
  styleUrls: ['./food-dialog.component.css']
})
export class FoodDialogComponent {
  food: Restaurantfood; 
  quantity: number = 1
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService, private cartNotificationService: CartNotificationService) {
    this.food = data.food;
    console.log('FoodDialogComponent Data:', data);
  }
  

  addToCart(food: Restaurantfood, quantity: number) {
    this.cartService.addToCart(food, quantity);
    this.cartNotificationService.updateCartCount(this.cartService.getCartItems().length);
  }
  
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
