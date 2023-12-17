import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

export interface UserDetails {
  uuid: string;
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: UserDetails = { uuid: '', username: '', email: '', password: '' };
  newUsername: string = '';
  newEmail: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private authService: AuthService,
   
  ) { }

  ngOnInit() {
    const user = this.authService.getUser();
    this.userDetails = {
      uuid: user.uuid,
      username: user.username,
      email: user.email,
      password: '', // You might not want to expose the password in the UI
    };

    // Initialize newUsername and newEmail with current values
    this.newUsername = this.userDetails.username;
    this.newEmail = this.userDetails.email;
  }

  editUser(): void {
    // Check if there are changes to username or email
    if (this.newUsername !== this.userDetails.username || this.newEmail !== this.userDetails.email) {
      const updatedUserDetails: UserDetails = {
        ...this.userDetails,
        username: this.newUsername,
        email: this.newEmail,
      };

      console.log('Data being sent to the server:', updatedUserDetails);
      this.userService.updateUserDetails(updatedUserDetails).subscribe(
        (response) => {
          console.log('User details updated successfully:', response);

          // Use alert for success
          alert('User details updated successfully');

        
        },
        (error) => {
          console.error('Error updating user details:', error);
          // Use alert for error
          alert('Error updating user details');
        }
      );
    } else {
      // No changes to username or email
      console.log('No changes to username or email. No request sent.');
    }
  }

}
