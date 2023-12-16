import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';


export interface UserDetails {
  UUID: string;
  Name: string ;
  Email: string ;
  Password: string ;
  
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit{
  userDetails: UserDetails = { UUID: '', Name: '', Email: '', Password: '' };
  



  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog,
    private userService: UserService,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    // Get user email from route parameters
    const user = this.authService.getUser();
    this.userDetails = {
      UUID: user.uuid,
      Name: user.username,
      Email: user.email,
      Password: '' // You might not want to expose the password in the UI
    };    
  }
  editUser(): void {
    console.log('Data being sent to the server:', this.userDetails);
      this.userService.updateUserDetails(this.userDetails).subscribe(
        (response) => {
          console.log('User details updated successfully:', response);
          // Handle success as needed
        },
        (error) => {
          console.error('Error updating food item:', error);
          // Handle the error appropriately
        }
      );
   }
  }


