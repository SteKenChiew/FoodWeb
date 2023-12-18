// adminlogin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    this.http.post('http://localhost:8080/admin/login', { email: this.email, password: this.password })
      .subscribe(
        (response) => {
          this.router.navigate(['adminmainpage']);
          console.log(response);
        },
        (error) => {
          // Handle error response
          if (error instanceof HttpErrorResponse) {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          } else {
            console.error(`An unknown error occurred: ${error}`);
          }
        }
      );
  }
  
}
