import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Restaurantfood {
  itemID: number;
  itemName: string ;
  itemDescription: string ;
  itemPrice: number ;
  itemImg: String ;
  itemCategory: string ;
  itemAvailability: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private user: any;
  private apiUrl = 'http://localhost:8080/merchant'; // Replace with your NestJS API URL

  constructor(private http: HttpClient) {}

 

  registerMerchant(user: any): Observable<any> {
    const url = 'http://localhost:8080/merchant/create'; // Add this line
    console.log('Registration URL:', url); // Add this line
    return this.http.post(url, user);
  }

  getMerchantFoodItems(merchantEmail: string): Observable<Restaurantfood[]> {
    const url = `${this.apiUrl}/get-food-items?merchantEmail=${merchantEmail}`;
    console.log('Fetch Food Items URL:', url);
    return this.http.get<Restaurantfood[]>(url);
  }
  
  updateFoodItem(food: Restaurantfood, merchantEmail: string, itemID: number): Observable<any> {
    const url = `${this.apiUrl}/update-food-item`;
    const params = { merchantEmail, itemID };
    return this.http.put(url, food, { params });
  }
  
// Update the updateFoodItemAvailability method in your Angular service
  updateFoodItemAvailability(merchantEmail: string, itemId: number, availability: boolean): Observable<void> {
    const url = `${this.apiUrl}/update-food-availability`;

    // Include 'merchantEmail', 'itemId', and 'itemAvailability' as query parameters
    const params = new HttpParams()
      .set('merchantEmail', merchantEmail)
      .set('itemID', itemId.toString())
      .set('itemAvailability', availability.toString()); // Convert 'availability' to string
    
    const body = { itemId, availability };

    return this.http.put<void>(url, body, { params });
  }



  
}
