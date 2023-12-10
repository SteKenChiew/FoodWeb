import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantauthService {
  private merchantName: any;
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
  

  getmerchantName(): any {
    return this.merchantName;
  }
  setAuthenticated(value: boolean): void {
    this.authenticated = value;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  
}
