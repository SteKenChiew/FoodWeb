import {  Component, ViewEncapsulation, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CartNotificationService } from './cart-notification.service';
import { AuthService } from './services/auth.service';

const noHeaderURLs = ['/login', '/signup','/forgotpass','/verification','/cart','/order-summary','/merchantmain','/orderpreparingpage','/readyorderpage','/orderhistorypage','/merchanteditmenu','/admin','/adminreslist','/orderdetails','/trackorder','/admincuslist','/merchantadditem','/adminmainpage','/merchantlogin'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './header.css','./footer.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'my-first-project';
  showHeader = true;
  showHead: boolean = false;
  cartCount: number = 0;
  authenticated: boolean = false;
  constructor(private router: Router,private cartNotificationService: CartNotificationService,private authService: AuthService) {
    
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          window.scrollTo(0, 0)
          if (noHeaderURLs.includes(event['url'])) {
            this.showHead = false;
          } else {
            this.showHead = true;
          }
          this.authenticated = this.authService.isAuthenticated();
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

    get userName(): string {
      const user = this.authService.getUser();
      return user ? user.username : '';
    }
}