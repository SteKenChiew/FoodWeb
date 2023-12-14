import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantauthService } from '../services/merchantauth.service';

@Component({
  selector: 'app-merchantlogin',
  templateUrl: './merchantlogin.component.html',
  styleUrls: ['./merchantlogin.component.css']
})
export class MerchantloginComponent {
  email: string = '';
  hashedpassword: string = '';

  constructor(private authService: MerchantauthService, private router: Router) {}
  login() {
    // Send the email and password directly to the backend
    this.authService.login(this.email, this.hashedpassword).subscribe(
      (response) => {
        console.log('Login successful:', response);
        console.log('Response Structure:', JSON.stringify(response));
        this.authService.setMerchantName(response);
        this.authService.setMerchantEmail(response);
        this.authService.setMerchantUUID(response);
        this.authService.setAuthenticated(true);
        console.log('Authenticated:', this.authService.isAuthenticated()); // Add this line
        this.router.navigate(['/merchantmain']);
      },
      (error) => {
        console.error('Login failed:', error);
        if (error.status === 404) {
          console.error('User not found. Check user credentials.');
        } else {
          console.error('Unexpected error:', error);
        }
      }
    );
  }
}
