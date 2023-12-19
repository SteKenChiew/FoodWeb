import { Component } from '@angular/core';
import{AdminService} from'../services/admin.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminmainpage',
  templateUrl: './adminmainpage.component.html',
  styleUrls: ['./adminmainpage.component.css']
})
export class AdminmainpageComponent {
  adminUsername: any;
  constructor( private adminService: AdminService,private router: Router,) {
    this.adminUsername = this.adminService.getadminUsername();

    if (!this.adminUsername) {
      this.adminUsername = 'Admin'; // Set your default admin username here
    }
  }
  logout() {
    this.adminService.logout();
    // Redirect to the login page or any other desired page after logout
    this.router.navigate(['/admin']);
  }
}
