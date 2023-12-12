import { Component, Renderer2, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs'; // Import Subscription
import { AuthService } from '../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];

  cartTotal: number = 0;
  cutleryChecked: boolean = false;
  cutleryCost: number = 0;
  uuid: string;
private cartSubscription: Subscription = new Subscription();


  
  @ViewChild('popularCardContainer') popularCardContainer!: ElementRef;


  constructor(private cartService: CartService,private authService: AuthService ) {
    this.uuid = this.authService.getUserUUID(); }
    ngOnInit(): void {
      this.cartService.getCartItems(this.uuid).subscribe(
        (data: any) => {
          console.log('After API call - Cart Items:', data);
          this.cartItems = data.cartItems || [];
          this.calculateCartTotal();
        },
        error => {
          console.error('Error fetching cart items:', error);
        }
      );
    }

    
    
    
    
    ngOnDestroy(): void {
      // Unsubscribe to avoid memory leaks
      this.cartSubscription.unsubscribe();
    }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }
  updateQuantity(index: number, change: number) {
    const item = this.cartItems[index];
  
    if (item) {
      item.quantity += change;
      console.log('Updated Item:', item);
      if (item.quantity <= 0) {
        this.cartService.removeFromCart(index);
      }
    }
  
    console.log('Cart Items after update:', this.cartItems);
    this.calculateCartTotal();
  }
  calculateCartTotal() {
    if (Array.isArray(this.cartItems)) {
      this.cartTotal = this.cartItems.reduce((total, item) => {
        const itemPrice = item.foodItem.itemPrice || 0;
        console.log('Item Details:', item);
        return total + itemPrice * item.quantity;
      }, 0);
    } else {
      this.cartTotal = 0; // Or handle it according to your logic
    }
    console.log('Cart Total:', this.cartTotal);
  }
  
  updateCutleryCost() {
    this.cutleryCost = this.cutleryChecked ? 10 : 0; 
    this.cartTotal += this.cutleryChecked ? 10 : -10;
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
