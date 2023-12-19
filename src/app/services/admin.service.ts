import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  adminUsername: any;
  constructor() { }

  setadminUsername( adminUsername: any): void {
    this.adminUsername =  adminUsername.username;
    console.log(this.adminUsername)
  }

  getadminUsername(): any {
    return this. adminUsername;
  }

  logout(): void {
  


    this.setadminUsername("null");
   
  }
}
