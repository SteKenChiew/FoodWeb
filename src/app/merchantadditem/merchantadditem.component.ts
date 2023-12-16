import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MerchantauthService } from '../services/merchantauth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-merchantadditem',
  templateUrl: './merchantadditem.component.html',
  styleUrls: ['./merchantadditem.component.css']
})
export class MerchantadditemComponent {
  itemName: string = '';
  itemDescription: string = '';
  itemPrice: number = 0;
  itemImg: File | null = null;
  itemCategory: string = '';

  constructor(private http: HttpClient, private authService: MerchantauthService, private storage: AngularFireStorage) {}

  onFileSelected(event: any) {
    this.itemImg = event.target.files[0] as File;
  }

  addItem() {
    const filePath = `merchant/${this.authService.getMerchantUUID()}/images/${Date.now()}_${this.itemImg?.name}`;

    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.itemImg as Blob);
  
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((downloadURL) => {
          const formData = new FormData();
          formData.append('image', downloadURL); // Ensure the key is 'image'
          formData.append('merchantEmail', this.authService.getmerchantEmail());
          formData.append('foodItem', JSON.stringify({
            itemName: this.itemName,
            itemDescription: this.itemDescription,
            itemPrice: this.itemPrice,
            itemCategory: this.itemCategory,
            itemAvailability: true
          }));
  
          if (this.isFormDataValid()) {
            this.http.post('http://localhost:8080/merchant/add-item', formData)
              .subscribe(
                (response) => {
                  console.log('Success:', response);
                  alert('You have successfully added the Item');
                },
                (error) => {
                  console.error('Error:', error);
                }
              );
          }
        });
      })
    ).subscribe();
  }
  
  isFormDataValid(): boolean {
     
    if (!this.itemName.trim()) {
      alert('Please enter Item Name');
      return false;
    }else if (!/^[a-zA-Z ]+$/.test(this.itemName.trim())){
      alert('Item Name should only contain letter') ;
      return false;
    }

    if (!this.itemDescription.trim()) {
      alert('Please enter Item Description');
      return false;
    }

    if (!this.itemPrice) {
      alert('Please enter Item Price');
      return false;
    }else if (this.itemPrice > 1000){
      alert('The price should below RYM 1000')
      return false;
    }else if (!/^\d+(,\d{1,2})?$/.test(this.itemPrice.toString())){
      alert('Please enter an valid price')
      return false;
    }

    if (!this.itemCategory.trim()) {
      alert('Please enter Item Category');
      return false;
    }
    // All checks passed, data is valid
    return true;
  }
  
}
