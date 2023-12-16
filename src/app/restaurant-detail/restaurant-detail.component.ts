import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FoodDialogComponent } from '../food-dialog/food-dialog.component';
import { HttpClient } from '@angular/common/http';

export interface Restaurantfood {
  itemID: number;
  itemImg: string;
  type: string;
  itemCategory: string;
  itemName: string;
  itemPrice: number;
  itemDescription: string;
  itemTotalSale: number;
  itemAvailability: boolean; // Add itemAvailability property
}

interface FoodCategories {
  name: string;
}

interface Restaurant {
  id: number;
  img: string;
  name: string;
  religion: string;
  estimatedtime: string;
  rating: number;
}

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  searchQuery: string = '';
  uuid: string = '';
  foodfilter: FoodCategories[] = []
  foodcategories: Restaurantfood[] = [];
  merchantName: string = '';
  merchantduration: number = 0;
  availableItems: Restaurantfood[] = [];
  constructor(private route: ActivatedRoute,
    private dialog: MatDialog,
    private http: HttpClient
  ) {
    this.route.params.subscribe(params => {
      this.uuid = params['id'];
      const shop = history.state.shop; // Retrieve the shop object from the navigation state

      if (shop) {
        // Merge foodItems into foodcategories
        this.foodcategories = [...this.foodcategories, ...shop.foodItems];
      } else {
        // Handle the case where the shop object is not available
        console.error('Shop object not found in navigation state');
      }

      // Fetch additional data if needed
      this.fetchRestaurantData();
    });
  }

  @ViewChild('categoriesCard') categoriesCard!: ElementRef;
  @ViewChild('nextButton') nextButton!: ElementRef;
  @ViewChild('prevButton') prevButton!: ElementRef;

  ngOnInit() {
    console.log('foodfilter:', this.foodfilter);
    const cardElement = this.categoriesCard.nativeElement; // <-- Error here
    cardElement.addEventListener('scroll', () => {
      this.checkButtonVisibility(cardElement);
    });
    this.prevButton.nativeElement.style.display = 'none';

  }
  fetchRestaurantData() {
    // Fetch additional restaurant data using this.uuid if needed
    this.http.get<any>(`http://localhost:8080/restaurants/${this.uuid}?itemAvailability=true`)
      .subscribe((data: any) => {
        console.log(data);
        this.merchantName = data.merchantName;
        this.merchantduration = data.duration;
        if (Array.isArray(data.foodItems)) {
          // If data.foodItems is an array, merge it into foodcategories
          this.foodcategories = [...this.foodcategories, ...data.foodItems];
          console.log(this.foodcategories);
  
          // Extract unique categories from foodcategories and populate foodfilter
          const uniqueCategories = Array.from(new Set(this.foodcategories.map(food => food.itemCategory)));
          this.foodfilter = uniqueCategories.map(category => ({ name: category as string }));
          console.log('foodfilter:', this.foodfilter);
  
          // Filter items with itemAvailability set to true and store in availableItems
          this.availableItems = this.foodcategories.filter(food => food.itemAvailability);
          console.log('availableItems:', this.availableItems);
        } else {
          console.error('foodItems is not an array:', data.foodItems);
          // Handle the case where data.foodItems is not an array
        }
  
        // You can also merge other properties if needed
        // this.foodcategories = [...this.foodcategories, ...data.otherProperty];
  
      }, (error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  nextCard() {
    const container = this.categoriesCard.nativeElement;
    const cardWidth = 1200; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft += scrollAmount;
    this.checkButtonVisibility(container);
  }

  prevCard() {
    const container = this.categoriesCard.nativeElement;
    const cardWidth = 1200; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft -= scrollAmount;
    this.checkButtonVisibility(container);
  }

  checkButtonVisibility(container: HTMLElement) {
    const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
    const isAtStart = container.scrollLeft === 0;
    this.nextButton.nativeElement.style.display = isAtEnd ? 'none' : 'block';
    this.prevButton.nativeElement.style.display = isAtStart ? 'none' : 'block';
  }

  @ViewChild('favcategoriesCard') favcategoriesCard!: ElementRef;

  favnextCard() {
    const container = this.favcategoriesCard.nativeElement;
    const cardWidth = 1000; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft += scrollAmount;

  }

  favpreviousCard() {
    const container = this.favcategoriesCard.nativeElement;
    const cardWidth = 1000; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft -= scrollAmount;

  }

  // Modify the getTop5FoodCategories function to filter based on itemAvailability
  getTop5FoodCategories(): Restaurantfood[] {
    // Sort the array in descending order based on itemTotalSale and slice the first 5.
    return this.foodcategories
      .filter(food => food.itemAvailability) // Filter based on itemAvailability
      .sort((a, b) => b.itemTotalSale - a.itemTotalSale)
      .slice(0, 5)
      .map(food => {
        // Map each Restaurantfood to itself
        return {
          itemID: food.itemID,
          itemImg: food.itemImg,
          type: food.type,
          itemCategory: food.itemCategory,
          itemName: food.itemName,
          itemPrice: food.itemPrice,
          itemDescription: food.itemDescription,
          itemTotalSale: food.itemTotalSale,
          itemAvailability: food.itemAvailability,
        };
      });
  }

  openDialog(food: Restaurantfood): void {
    const dialogRef = this.dialog.open(FoodDialogComponent, {
      width: '640px', // Adjust the width as needed
      height: '700px',
      data: { food }, // Pass the food data to the dialog
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
  hasItemsInCategory(category: any): boolean {
    console.log('Category:', category);
    console.log('Available Items:', this.availableItems);
    return this.availableItems.some(food => food.itemCategory === category.name);
  }
  
  
}
