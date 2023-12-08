// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user'; // Replace with your NestJS API URL

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = 'http://localhost:8080/user/create'; // Add this line
    console.log('Registration URL:', url); // Add this line
    return this.http.post(url, user);
  }
}