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

  login(email: string, hashedpassword: string): Observable<any> {
    const requestBody = { email, hashedpassword };
    return this.http.post('http://localhost:8080/user/login', requestBody);
  }
  
  
}
