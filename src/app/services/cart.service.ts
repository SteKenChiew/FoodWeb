import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurantfood } from '../restaurant-detail/restaurant-detail.component'; // Adjust the path as needed
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/user/cart';
  cartItems: any[] = [];
  constructor(private http: HttpClient) {}
  addToCart(uuid: string, foodItem: Restaurantfood, quantity: number): Observable<void> {
    const body = {
      ...foodItem,
      quantity: quantity
    };
  
    // Ensure that userUUID is included in the request
    if (!uuid) {
      console.error('userUUID is required');
      return throwError('userUUID is required');
    }
  
    return this.http.post<void>(`${this.apiUrl}/add?uuid=${uuid}`, body);
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
