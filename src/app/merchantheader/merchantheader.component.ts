// merchant-header.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantauthService } from '../services/merchantauth.service';

@Component({
  selector: 'app-merchant-header',
  templateUrl: './merchantheader.component.html',
  styleUrls: ['./merchantheader.component.css']
})
export class MerchantHeaderComponent implements OnInit {
  authenticated: boolean = false;
  merchantName: string = '';

  constructor(private merchantAuthService: MerchantauthService, private router: Router) {}

  ngOnInit() {
    // Ensure that this logic runs after the component is initialized
    this.authenticated = this.merchantAuthService.isAuthenticated();
    this.merchantName = this.merchantAuthService.getmerchantName();
  }


  logout() {
    this.merchantAuthService.logout();
    // Redirect to the login page or any other desired page after logout
    this.router.navigate(['/merchantlogin']);
  }
}
