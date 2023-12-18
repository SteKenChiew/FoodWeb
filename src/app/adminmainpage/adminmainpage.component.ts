import { Component } from '@angular/core';
import{AdminService} from'../services/admin.service'

@Component({
  selector: 'app-adminmainpage',
  templateUrl: './adminmainpage.component.html',
  styleUrls: ['./adminmainpage.component.css']
})
export class AdminmainpageComponent {
  adminUsername: any;
  constructor( private adminService: AdminService) {
    this.adminUsername = this.adminService.getadminUsername();

    if (!this.adminUsername) {
      this.adminUsername = 'Admin'; // Set your default admin username here
    }
  }

}
