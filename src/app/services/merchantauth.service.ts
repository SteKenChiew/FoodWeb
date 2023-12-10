import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantauthService {
  private user: any;
  private apiUrl = 'http://localhost:8080/merchant'; // Replace with your authentication API URL

  constructor(private http: HttpClient) {}

  login(email: string, hashedpassword: string): Observable<any> {
    console.log('Request payload:', { email, hashedpassword });
    const requestBody = { email, hashedpassword };
    return this.http.post('http://localhost:8080/merchant/login', requestBody);
  }
  
  
  
  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }
  isAuthenticated(): boolean {
    // Implement logic to check whether the user is authenticated.
    // For example, check if the user object is present in your service.
    return !!this.getUser();
  }

  
}
