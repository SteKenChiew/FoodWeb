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
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Login method triggered. Email:', this.email, 'Password:', this.password); // Log the values
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login response:', response);
        // Continue with your existing logic...
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  
  }
}
