// src/app/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080'; // Update this with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<any> {
    const url = `${this.baseUrl}/api/signup`; // Adjust the endpoint based on your backend API
    return this.http.post(url, data);
  }
}
