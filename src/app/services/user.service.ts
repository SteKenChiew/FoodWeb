// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/'; // Replace with your NestJS API URL
 
  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = 'http://localhost:8080/user/create'; // Add this line
    console.log('Registration URL:', url); // Add this line
    return this.http.post(url, user);
  }

  registerMerchant(user: any): Observable<any> {
    const url = 'http://localhost:8080/merchant/create'; // Add this line
    console.log('Registration URL:', url); // Add this line
    return this.http.post(url, user);
  }

  updateUserDetails(user: any): Observable<any> {
    const url = `http://localhost:8080/user/update-user`;
    console.log('Update User URL:', url);
    return this.http.post(url, user)
      .pipe(
        catchError((error) => {
          console.error('Error updating user details:', error);
          throw error; // Rethrow the error after logging
        })
      );
  }
 
}