import { Component , Renderer2,ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[];
  cartTotal: number = 0;
  cutleryChecked: boolean = false;
  cutleryCost: number = 0;
  updateCutleryCost() {
    this.cutleryCost = this.cutleryChecked ? 10 : 0; 
    this.cartTotal += this.cutleryChecked ? 10 : -10;
  }
  @ViewChild('popularCardContainer') popularCardContainer!: ElementRef;


  constructor(private cartService: CartService) {
    this.cartItems = cartService.getCartItems();
    this.calculateCartTotal();
    
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
    this.calculateCartTotal();
  }
 updateQuantity(index: number, change: number) {
    const item = this.cartItems[index];

    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        this.cartService.removeFromCart(index);
      }
    }

    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = this.cartItems.reduce((total, item) => total + item.itemPrice * item.quantity, 0);
  }

 
  nextCard() {
    const container = this.popularCardContainer.nativeElement;
    const cardWidth = 400; // Adjust this value based on your card width
    const scrollAmount = cardWidth * 2; // Scroll by two card widths
    container.scrollLeft += scrollAmount;
  }
  
  previousCard() {
    const container = this.popularCardContainer.nativeElement;
    const cardWidth = 400; // Adjust this value based on your card width
    const scrollAmount = cardWidth * 2; // Scroll by two card widths
    container.scrollLeft -= scrollAmount;
  }
  
  
}
