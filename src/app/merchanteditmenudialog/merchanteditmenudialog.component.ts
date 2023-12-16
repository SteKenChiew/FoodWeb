import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MerchantService, Restaurantfood } from '../services/merchant.service';
import { CartService } from '../services/cart.service';
import { MerchantauthService } from '../services/merchantauth.service';

@Component({
  selector: 'app-merchanteditmenudialog',
  templateUrl: './merchanteditmenudialog.component.html',
  styleUrls: ['./merchanteditmenudialog.component.css']
})
export class MerchanteditmenudialogComponent {
  editedFood: Restaurantfood;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService,
    private merchantService: MerchantService,
    private merchantAuthService: MerchantauthService
  ) {
    // Copy the data to editedFood to avoid modifying the original food object
    this.editedFood = { ...data.food };
  }

  editFood(): void {
    console.log('Data being sent to the server:', this.editedFood);

    // Assuming you have the merchantEmail available, replace 'yourMerchantEmail' with the actual value
    const merchantEmail = this.merchantAuthService.getmerchantEmail();

    // Assuming you have itemID available in your data or you can get it from your backend response
    const itemID = this.editedFood.itemID;
    if(this.isFormDataValid()){
      this.merchantService.updateFoodItem(this.editedFood, merchantEmail, itemID).subscribe(
        (response) => {
          console.log('Food item updated successfully:', response);
          // Handle success as needed
        },
        (error) => {
          console.error('Error updating food item:', error);
          // Handle the error appropriately
        }
      );
   }
  }
  isFormDataValid(): boolean {
     
    if (!this.editedFood.itemName.trim()) {
      alert('Please enter Item Name');
      return false;
    }else if (!/^[a-zA-Z ]+$/.test(this.editedFood.itemName.trim())){
      alert('Item Name should only contain letter') ;
      return false;
    }

    if (!this.editedFood.itemDescription.trim()) {
      alert('Please enter Item Description');
      return false;
    }

    if (!this.editedFood.itemPrice) {
      alert('Please enter Item Price');
      return false;
    }else if (this.editedFood.itemPrice > 1000){
      alert('The price should below RYM 1000')
      return false;
    }else if (!/^\d+(,\d{1,2})?$/.test(this.editedFood.itemPrice.toString())){
      alert('Please enter an valid price')
      return false;
    }

    if (!this.editedFood.itemCategory.trim()) {
      alert('Please enter Item Category');
      return false;
    }
    // All checks passed, data is valid
    return true;
  }
}
