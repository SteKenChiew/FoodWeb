import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service'; 
import { FileUploadService } from '../services/file-upload.service';
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
  selectedFile: File | null = null;

  constructor(private merchantService: MerchantService, private router: Router, private fileUploadService: FileUploadService) {}
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  registerMerchant() {
    if (!this.isFormDataValid()){
      return;
    }
    else if (this.selectedFile) {
      // Upload the file first
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          // Save the file path in the merchant object
          this.merchant.merchantImage = response.filePath;

          // Proceed with merchant registration
          this.registerMerchantAfterUpload();
        },
        (error) => {
          console.error('File upload failed:', error);
        }
      );
    } else {
      // No file selected, proceed with merchant registration without an image
      this.registerMerchantAfterUpload();
    }
  }
  private registerMerchantAfterUpload() {
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
  isFormDataValid(): boolean {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,15}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!this.merchant.merchantName.trim()) {
      // Merchant Name is empty
      alert('Please enter Merchant Name');
      return false;
    }else if (!/^[a-zA-Z]+$/.test(this.merchant.merchantName.trim())){
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
