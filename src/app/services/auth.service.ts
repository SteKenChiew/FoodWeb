// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/user'; // Replace with your authentication API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    console.log('Login URL:', loginUrl);
  
    // Send data in the expected format
    return this.http.post(loginUrl, { email, password }, { headers: { 'Content-Type': 'application/json' } });


  }
}
