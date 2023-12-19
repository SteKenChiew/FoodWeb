// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any;
  private useruuid: any;
  private usernameSubject = new BehaviorSubject<string>('');
  public username$: Observable<string> = this.usernameSubject.asObservable();
  private authToken: string | null = null;

  private apiUrl = 'http://localhost:8080/user'; // Replace with your authentication API URL

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    const storedUserUUID = localStorage.getItem('userUUID');
    if (storedUserUUID) {
      this.useruuid = storedUserUUID;
    }
  }

  login(email: string, hashedpassword: string): Observable<any> {
    const requestBody = { email, hashedpassword };
    return this.http.post('http://localhost:8080/user/login', requestBody);
    
  }
  
  setUserUUID(useruuid: any): void {
    this.useruuid = useruuid;
  }
  getUserUUID(): any {
    return this.useruuid;
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

  updateUsername(newUsername: string) {
    console.log('Updating username:', newUsername);
    this.usernameSubject.next(newUsername);
  }
  logout(): void {
    // Clear user authentication details from localStorage
    localStorage.removeItem('userUUID');
    localStorage.removeItem('user');

    // Clear user authentication details in-memory
    this.setUserUUID(null);
    this.setUser(null);
    console.log(this.user)
    this.clearAuthToken();
    // Optionally, you can add more cleanup logic here
  }
  setAuthToken(token: string): void {
    this.authToken = token;
    localStorage.setItem('authToken', token);
  }

  getAuthToken(): string | null {
    return this.authToken;
  }
  clearAuthToken(): void {
    this.authToken = null;
    localStorage.removeItem('authToken');
  }
}
