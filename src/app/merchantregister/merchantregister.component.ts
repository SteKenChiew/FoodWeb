import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service'; 

@Component({
  selector: 'app-merchantregister',
  templateUrl: './merchantregister.component.html',
  styleUrls: ['./merchantregister.component.css']
})
export class MerchantregisterComponent {
  merchant = {
    merchantName: '',
    merchantImage: '',
    merchantEmail: '',
    hashedpassword: '',
    merchantType:'',
  };

  constructor(private merchantService: MerchantService, private router: Router) {}

  registerMerchant() {
    // Call the user service to register the user
    this.merchantService.registerMerchant(this.merchant).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Optionally, navigate to another page after successful registration
       
      },
      (error) => {
        console.error('Registration merchant failed:', error);
        // Handle registration failure (show error message, etc.)
      }
    );
  }
}
