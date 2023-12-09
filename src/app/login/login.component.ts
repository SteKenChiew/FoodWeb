import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  hashedpassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  login() {
    // Send the email and password directly to the backend
    this.authService.login(this.email, this.hashedpassword).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.authService.setUser(response);
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Login failed:', error);
        if (error.status === 404) {
          console.error('User not found. Check user credentials.');
        } else {
          console.error('Unexpected error:', error);
        }
        // Handle login error
      }
    );
  }
  
}
