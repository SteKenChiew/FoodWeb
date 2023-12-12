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
  tCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  
}
