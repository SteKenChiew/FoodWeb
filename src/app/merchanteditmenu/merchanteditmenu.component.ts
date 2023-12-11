import { Component, ElementRef, ViewChild ,Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MerchanteditmenudialogComponent } from '../merchanteditmenudialog/merchanteditmenudialog.component';
import { MerchantService } from '../services/merchant.service';
import { MerchantauthService } from '../services/merchantauth.service';

export interface Restaurantfood {
  itemName: string ;
  itemDescription: string ;
  itemPrice: number ;
  itemImg: String ;
  itemCategory: String ;
  
}

interface FoodCategories {
  name: string;  // Use lowercase 'string' here
}

@Component({
  selector: 'app-merchanteditmenu',
  templateUrl: './merchanteditmenu.component.html',
  styleUrls: ['./merchanteditmenu.component.css']
})
export class MerchanteditmenuComponent {
  searchQuery: string = '';
  foodcategories: Restaurantfood[] = []
  foodfilter: FoodCategories[] = []

  @ViewChild('categoriesCard') categoriesCard!: ElementRef;
  @ViewChild('nextButton') nextButton!: ElementRef;
  @ViewChild('prevButton') prevButton!: ElementRef;



  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog,
    private merchantService: MerchantService,
    private merchantAuthService: MerchantauthService
    ) { }

    ngOnInit() {
      console.log('Initial searchQuery:', this.searchQuery);
      const merchantEmail = this.merchantAuthService.getmerchantEmail();
    
      if (merchantEmail) {
        this.fetchMerchantFoodItems(merchantEmail);
      }
    }
    
    fetchMerchantFoodItems(merchantEmail: string) {
        console.log('Fetching food items for searchQuery:', this.searchQuery);
      this.merchantService.getMerchantFoodItems(merchantEmail).subscribe(
        (foodItems: Restaurantfood[]) => {
          // Populate foodfilter array with unique categories
          const uniqueCategories = Array.from(new Set(foodItems.map(food => food.itemCategory)));
          this.foodfilter = uniqueCategories.map(category => ({ name: category as string }));
          this.foodcategories = foodItems;
    
          console.log('foodfilter:', this.foodfilter);
          console.log('foodcategories:', this.foodcategories);
        },
        (error) => {
          console.error('Error fetching merchant food items:', error);
          // Handle error, e.g., show an error message to the user
        }
      );
    }
    
    
    openDialog(food: Restaurantfood): void {
      const dialogRef = this.dialog.open(MerchanteditmenudialogComponent, {
        width: '640px', // Adjust the width as needed
        height: '700px',
        data: {food: food }, // Pass the food data to the dialog
        panelClass: 'custom-dialog' 
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Handle any actions after the dialog is closed
      });
    }
    

    
    scrollToCategory(categoryName: string): void {
      const element = document.getElementById(categoryName);
      if (element) {
        
        const headerHeight = 220;
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - headerHeight,
          behavior: 'smooth',
        });
      }
       this.searchQuery = '';
    }
    clearSearchQuery(): void {
      this.searchQuery = ''; // Clear the search query
  }
 
    
}
