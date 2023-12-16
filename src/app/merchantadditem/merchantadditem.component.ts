import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MerchantauthService } from '../services/merchantauth.service';

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

  constructor(private http: HttpClient, private authService: MerchantauthService) {}

  onFileSelected(event: any) {
    this.itemImg = event.target.files[0] as File;
  }

  addItem() {
    const formData = new FormData();
    formData.append('image', this.itemImg as Blob, this.itemImg?.name || '');
    formData.append('merchantEmail', this.authService.getmerchantEmail());
    formData.append('foodItem', JSON.stringify({
      itemName: this.itemName,
      itemDescription: this.itemDescription,
      itemPrice: this.itemPrice,
      itemCategory: this.itemCategory
    }));
  
    // Remove Firebase-specific code
  
    this.http.post('http://localhost:8080/merchant/add-item', formData)
      .subscribe(
        (response) => {
          console.log('Success:', response);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
  
}
