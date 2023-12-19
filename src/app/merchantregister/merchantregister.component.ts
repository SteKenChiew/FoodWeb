import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service'; 
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {AdminService} from '../services/admin.service'
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
    merchantType: '',
  };
  selectedFile: File | null = null;
  passwordInputFocused = false;
  adminUsername: any;
  constructor(
    private merchantService: MerchantService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage,
    private adminService: AdminService
  ) { this.adminUsername = this.adminService.getadminUsername();

    if (!this.adminUsername) {
      this.adminUsername = 'Admin'; // Set your default admin username here
    }}

  
  


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  registerMerchant() {
    if (this.isFormDataValid()) {
      if (this.selectedFile) {
        const filePath = `merchant/images/${Date.now()}_${this.selectedFile.name}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, this.selectedFile as Blob);
  
        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((downloadURL) => {
              this.merchant.merchantImage = downloadURL;
              this.registerMerchantAfterUpload();
            });
          })
        ).subscribe();
      } else {
        // No file selected, proceed with merchant registration without an image
        this.registerMerchantAfterUpload();
      }
    }
  }
  

  private registerMerchantAfterUpload() {
    this.merchantService.registerMerchant(this.merchant).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert("Merhant Registered")
      },
      (error) => {
        console.error('Registration merchant failed:', error);
        // Handle registration failure (show error message, etc.)
      }
    );
  }

  logout() {
    this.adminService.logout();
    // Redirect to the login page or any other desired page after logout
    this.router.navigate(['/admin']);
  }

  isFormDataValid(): boolean {
     
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,15}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!this.merchant.merchantName.trim()) {
      // Merchant Name is empty
      alert('Please enter Merchant Name');
      return false;
    }else if (!/^[a-zA-Z ]+$/.test(this.merchant.merchantName.trim())){
      alert('Merchant Name should only contain letter') ;
      return false;
    }

    if (!this.merchant.merchantEmail.trim()) {
      // Merchant Email is empty
      alert('Please enter Merchant Email');
      return false;
    }else if(!emailRegex.test(this.merchant.merchantEmail.trim()))

    if (!this.merchant.hashedpassword.trim()) {
      // Merchant Password is empty
      alert('Please enter Merchant Password');
      return false;
    }else if (!passwordRegex.test(this.merchant.hashedpassword.trim())){
      alert('Password should contain 3-15 characters with a combination of letters, numbers, and symbols.');
      return false;
    }

    if (!this.merchant.merchantType) {
      // Merchant Type is not selected
      alert('Please select Merchant Type');
      return false;
    }

    // All checks passed, data is valid
    return true;
  }


}
