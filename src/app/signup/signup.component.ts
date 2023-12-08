import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'; // Import your user service

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    hashedpassword: '',
  };
  

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    // Call the user service to register the user
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Optionally, navigate to another page after successful registration
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle registration failure (show error message, etc.)
      }
    );
  }
}
