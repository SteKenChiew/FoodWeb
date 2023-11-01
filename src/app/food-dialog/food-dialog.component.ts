import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { Restaurantfood } from '../restaurant-detail/restaurant-detail.component'; // Adjust the path as needed


@Component({
  selector: 'app-food-dialog',
  templateUrl: './food-dialog.component.html',
  styleUrls: ['./food-dialog.component.css']
})
export class FoodDialogComponent {
  food: Restaurantfood; 
  quantity: number = 1
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService) {
    this.food = data.food;
    console.log('FoodDialogComponent Data:', data);
  }
  

  addToCart(food: Restaurantfood, quantity: number) {
    this.cartService.addToCart(food, quantity);
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
