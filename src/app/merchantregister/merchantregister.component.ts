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
    if (this.selectedFile) {
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
}
