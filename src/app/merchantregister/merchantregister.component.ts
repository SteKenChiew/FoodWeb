import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../services/merchant.service'; 
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private merchantService: MerchantService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  registerMerchant() {
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

  private registerMerchantAfterUpload() {
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
