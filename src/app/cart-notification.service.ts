// cart-notification.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartNotificationService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  updateCartCount(count: number) {
    this.cartCountSubject.next(count);
  }

  getCartCount(): number {
    return this.cartCountSubject.value;
  }
}
