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
  passwordInputFocused = false;
  

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    // Call the user service to register the user
      if (this.isFormDataValid()){
      this.userService.registerUser(this.user).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          alert("You have successfully registered")
          // Optionally, navigate to another page after successful registration
          this.router.navigate(['/login']);
          this.user = {
            username: '',
            email: '',
            hashedpassword: '',
          };
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle registration failure (show error message, etc.)
        }
      );
    }
  }

  isFormDataValid(): boolean {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,15}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!this.user.username.trim()) {
      alert('Please enter your Name');
      return false;
    }else if (!/^[a-zA-Z0-9 ]+$/.test(this.user.username.trim())){
      alert('Item Name should only contain letter and numbers') ;
      return false;
    }

    if (!this.user.email.trim()) {
      alert('Please enter your email');
      return false;
    }else if(!emailRegex.test(this.user.email)){
      alert('Please enter an valid email');
      return false
    }


    if (!this.user.hashedpassword.trim()) {
      alert('Please enter your password');
      return false;
    }else if (!passwordRegex.test(this.user.hashedpassword.trim())){
      alert('Password should contain 3-15 characters with a combination of letters, numbers, and symbols.');
      return false;
    }
  
    // All checks passed, data is valid
    return true;
  }


}
