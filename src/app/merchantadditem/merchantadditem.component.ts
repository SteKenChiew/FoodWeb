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
    if(this.isFormDataValid()){
      this.http.post('http://localhost:8080/merchant/add-item', foodItem, {
        params: { merchantEmail },
      })
        .subscribe(
          (response) => {
            console.log('Success:', response);
            alert("You have succesfully added the Item")
            // Handle success (e.g., show a success message)
          },
          (error) => {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
          }
        );
    }
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
    }else if (!/^[a-zA-Z ]+$/.test(this.itemCategory.trim())){
      alert('Item Category should only contain letter') ;
      return false;
    }
    // All checks passed, data is valid
    return true;
  }
}
