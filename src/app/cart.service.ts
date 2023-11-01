import { Injectable } from '@angular/core';
import { Restaurantfood } from './restaurant-detail/restaurant-detail.component'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  addToCart(item: Restaurantfood, quantity: number) {
    // Check if the item is already in the cart
    const existingItem = this.cartItems.find((cartItem) => cartItem.name === item.name);
  
    if (existingItem) {
      // If it exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If it doesn't exist, add the item to the cart
      this.cartItems.push({
        ...item,
        quantity: quantity
      });
    }
  }
  

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  
}
