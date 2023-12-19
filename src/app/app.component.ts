import { Component, ViewEncapsulation, ChangeDetectorRef , OnInit } from '@angular/core';
import { Router, NavigationStart , NavigationEnd } from '@angular/router';
import { CartNotificationService } from './cart-notification.service';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';
const noHeaderURLs = ['/login', '/signup', '/forgotpass', '/verification', '/cart', '/order-summary', '/merchantmain', '/orderpreparingpage', '/readyorderpage', '/orderhistorypage', '/merchanteditmenu', '/admin', '/adminreslist', '/orderdetails', '/trackorder', '/admincuslist', '/merchantadditem', '/adminmainpage', '/merchantlogin', '/merchantmainpage', '/cusorderhistory', '/cusactiveorder','/merchantregister'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './header.css', './footer.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'my-first-project';
  showHeader = true;
  showHead: boolean = false;
  cartCount: number = 0;
  authenticated: boolean = false;

  private _userName: string = '';

  constructor(
    private router: Router,
    private cartNotificationService: CartNotificationService,
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
        if (noHeaderURLs.includes(event['url'])) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
        this.authenticated = this.authService.isAuthenticated();
      }

      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top on NavigationEnd
      }
    });
  }

  ngOnInit() {
    // Subscribe to user changes
    this.authService.username$.subscribe((newUsername) => {
      this.userName = newUsername;
      this.cd.detectChanges(); // Trigger change detection
    });
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.authService.setAuthToken(authToken);
    }
    // Subscribe to cart count changes
    this.cartNotificationService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
   
  }

  goPlaces() {
    this.router.navigate(['/login']);
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  logout() {
    this.authService.logout();
    // Redirect to the login page or any other desired page after logout
    this.router.navigate(['/home']);
  }
}
