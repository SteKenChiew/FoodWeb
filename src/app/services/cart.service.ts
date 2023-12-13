import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Restaurantfood } from '../restaurant-detail/restaurant-detail.component';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
interface FoodItem {
  itemID: number;
  itemName: string;
  itemImg: string;
  itemPrice: number;
  itemCategory: string;
  // ... other properties
}
interface CartItem {
  foodItem: FoodItem;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/user/cart';
  cartItems: any[] = [];
  cartItemsChanged: Subject<void> = new Subject<void>(); // Added subject for changes

  constructor(private http: HttpClient) {}

  addToCart(uuid: string, merchantUuid: string, foodItem: Restaurantfood, quantity: number): Observable<void> {
    const body = {
      ...foodItem,
      quantity: quantity
    };
  
    // Ensure that userUUID is included in the request
    if (!uuid || !merchantUuid) {
      console.error('userUUID and merchantUUID are required');
      return throwError('userUUID and merchantUUID are required');
    }
  
    return this.http.post<void>(`${this.apiUrl}/add?uuid=${uuid}&merchantUuid=${merchantUuid}`, body);
  }
  

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartItemsChanged.next(); // Notify subscribers about changes
  }

  getCartItems(uuid: string): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiUrl}?uuid=${uuid}`).pipe(
      tap(data => {
        console.log('Getting cart items:', data);
      }),
      catchError(error => {
        console.error('Error getting cart items:', error);
        return throwError(error);
      })
    );
  }
  CartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  updateCartItem(uuid: string, item: any): Observable<void> {
    const body = {
      itemID: item.foodItem.itemID,
      quantity: item.quantity
    };
  
    // Assuming you have an endpoint for updating cart items
    return this.http.put<void>(`${this.apiUrl}/update?uuid=${uuid}`, body);
  }
  // cart.service.ts
  placeOrder(uuid: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/place-order?uuid=${uuid}`, {});
  }

}
