import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MerchantauthService} from '../services/merchantauth.service';

@Component({
  selector: 'app-merchantadditem',
  templateUrl: './merchantadditem.component.html',
  styleUrls: ['./merchantadditem.component.css']
})
export class MerchantadditemComponent {
  itemName: string = '';
  itemDescription: string = '';
  itemPrice: number = 0;
  itemImg: String = '';
  itemCategory: String ='';

  constructor(private http: HttpClient, private authService: MerchantauthService) {}

  addItem() {
    const foodItem = {
      itemName: this.itemName,
      itemImg: this.itemImg,
      itemDescription: this.itemDescription,
      itemPrice: this.itemPrice,
      itemCategory: this.itemCategory
      // Add other properties as needed
    };

    const merchantEmail = this.authService.getmerchantEmail(); // Replace with the actual email

    this.http.post('http://localhost:8080/merchant/add-item', foodItem, {
      params: { merchantEmail },
    })
      .subscribe(
        (response) => {
          console.log('Success:', response);
          // Handle success (e.g., show a success message)
        },
        (error) => {
          console.error('Error:', error);
          // Handle error (e.g., show an error message)
        }
      );
  }
}
