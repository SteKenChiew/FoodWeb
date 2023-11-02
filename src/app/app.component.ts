import {  Component, ViewEncapsulation, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CartNotificationService } from './cart-notification.service';

const noHeaderURLs = ['/login', '/signup','/forgotpass','/verification','/cart'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '/header.css','/footer.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'my-first-project';
  showHeader = true;
  showHead: boolean = false;
  cartCount: number = 0;
 
  constructor(private router: Router,private cartNotificationService: CartNotificationService) {
    
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          window.scrollTo(0, 0)
          if (noHeaderURLs.includes(event['url'])) {
            this.showHead = false;
          } else {
            this.showHead = true;
          }
        }
      });
    }
    ngOnInit() {
      // Subscribe to cart count changes
      this.cartNotificationService.cartCount$.subscribe((count) => {
        this.cartCount = count;
      });
    }

    goPlaces() {
      this.router.navigate(['/login']);
    }
}
