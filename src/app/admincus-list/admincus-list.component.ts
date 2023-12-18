import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admincus-list',
  templateUrl: './admincus-list.component.html',
  styleUrls: ['./admincus-list.component.css']
})
export class AdmincusListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData() {
    // Fetch user data from the backend API
    this.http.get<any[]>('http://localhost:8080/admin/user-list')
      .subscribe(users => {
        this.users = users;
        this.filterUsers(); // Initial filtering based on the search term and pagination
      });
  }

  filterUsers() {
    // Apply filtering based on the search term
    const filteredData = this.users.filter(user => {
      return user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             user.uuid.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  
    // Apply pagination
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.filteredUsers = filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  
    // Add debugging output
    console.log('filteredData:', filteredData);
    console.log('startIndex:', startIndex);
    console.log('filteredUsers:', this.filteredUsers);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.filterUsers();
    console.log('currentPage:', this.currentPage);
  }

  onNextPage() {
    // Calculate the total pages based on the filtered users, not the original users
    const totalPages = Math.ceil(this.users.length / this.itemsPerPage);
  
    console.log('Current Page (Before Next):', this.currentPage);
    console.log('Total Pages:', totalPages);
  
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.filterUsers();
      console.log('Current Page (After Next):', this.currentPage);
    }
  }
  
  onPreviousPage() {
    console.log('Current Page:', this.currentPage);
  
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterUsers();
    }
  }

  // Add the getPages method
  getPages(): number[] {
    const totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  onDeleteUser(userUUID: string) {
    this.http.delete(`http://localhost:8080/user/delete/${userUUID}`)
      .subscribe(
        () => {
          console.log(`User with UUID ${userUUID} deleted successfully.`);
          // Fetch user data again after deletion
          this.fetchUserData();
          this.cdr.detectChanges(); // Trigger change detection
        },
        error => {
          console.error(`Error deleting user with UUID ${userUUID}:`, error);
          // Handle the error, show a message, etc.
        }
      );
  }
  
}
