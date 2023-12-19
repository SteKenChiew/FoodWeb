import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantauthService {
  private merchantName: any;
  private merchantEmail: any;
  private merchantUUID: any;
  private apiUrl = 'http://localhost:8080/merchant'; // Replace with your authentication API URL
  private authenticated: boolean = false; 
  constructor(private http: HttpClient) {}

  login(email: string, hashedpassword: string): Observable<any> {
    console.log('Request payload:', { email, hashedpassword });
    const requestBody = { email, hashedpassword };
    return this.http.post('http://localhost:8080/merchant/login', requestBody);
  }
  
  
  
  setMerchantName(response: any): void {
    // Assuming the merchant name is a property in the response
    this.merchantName = response.merchantName;
  }
  setMerchantEmail(response: any): void {
    // Assuming the merchant name is a property in the response
    this.merchantEmail = response.merchantEmail;
  }
  getmerchantEmail(): any {
    return this.merchantEmail;
  }

  getmerchantName(): any {
    return this.merchantName;
  }
  setAuthenticated(value: boolean): void {
    this.authenticated = value;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  setMerchantUUID(response: any): void {
    // Assuming your login response contains the merchant UUID
    this.merchantUUID = response.uuid;
  }
  getMerchantUUID(): any {
    return this.merchantUUID;
}

logout(): void {

  this.setMerchantName("null");
 this.setAuthenticated(false);
 this.setMerchantEmail("null");
 this.setMerchantUUID("null");

}
}
