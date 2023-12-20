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
    
  
    this.authService.login(this.email, this.hashedpassword).subscribe(
      (response) => {
        console.log('Login successful:', response);

        // Clear the form values
        this.email = '';
        this.hashedpassword = '';
        this.authService.setUserUUID(response.uuid);
        this.authService.setUser(response);
        this.router.navigate(['']);
        this.authService.updateUsername(response.username);
        const token = response.token;
        if (token) {
          this.authService.setAuthToken(token);
        }
       
      },
      (error) => {
        console.error('Login failed:', error);
        if (error.status === 404) {
          alert('User not found');
        } else {
          alert('Wrong password or email');
        }
        // Handle login error
      }
    );
  }
 
}
