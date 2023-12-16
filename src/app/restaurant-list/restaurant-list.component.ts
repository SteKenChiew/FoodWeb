import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface Categories {
  type: string;
  logo: string;
  img: string;
}

interface Categoriesfood {
  img: string;
  type: string;
  name: string;
  price: number;
  desc: string;
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
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
  
  items: Categories[] = [
    { type: 'Western', logo: 'assets/img/burger.png' ,img: "assets/img/favcategories/western.png"},
    { type: 'Asian Delights', logo: 'assets/img/mee.png' ,img: "assets/img/favcategories/asiandelights.png" },
    { type: 'Quick Bites', logo: 'assets/img/muffin.png',img: "assets/img/favcategories/fastfood.png" },
    { type: 'Beverages', logo: 'assets/img/drinks.png' ,img: "assets/img/favcategories/beverage.png"},
    { type: 'Desserts', logo: 'assets/img/icecream.png' ,img: "assets/img/favcategories/desserts.png"}
    
  ];

  foodcategories: Categoriesfood[] = [
    {
      img: '',
      type: 'Asian Delights',
      name: 'Hainanese Chicken Rice',
      price: 7.50,
      desc: 'Ji Fan',
    },
    {
      img: '',
      type: 'Asian Delights',
      name: 'Pad Thai 1',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
    },
    {
      img: '',
      type: 'Asian Delights',
      name: 'Pad Thai 2',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
    },
    {
      img: '',
      type: 'Western',
      name: 'Burger',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
    },
    {
      img: 'assets/img/zus.jpg',
      type: 'Beverages',
      name: 'Zus',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
    },{
      img: '',
      type: 'Asian Delights',
      name: 'Pad Thai 3',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
    },
  ];

  shop: Restaurant[] = [
    {
      id:1,img:"assets/img/restaurantimg/daundaun.jpg", name:'Daun Daun',religion:'Asian',estimatedtime:'30',rating:4.0
    },
    {
      id:2,img: 'assets/img/restaurantimg/madeleine.png', name:'Madeleine Café',religion:'Western',estimatedtime:'30',rating:4.0
    },
    {
      id:3,img:'assets/img/restaurantimg/starbucks.jpg', name:'Starbucks',religion:'Coffe',estimatedtime:'15',rating:4.0
    },
    {
      id:4,img:'assets/img/restaurantimg/tomyumkitchen.png', name:'Tom Yum Kitchen',religion:'Asian',estimatedtime:'20',rating:3.8
    },
    {
      id:5,img:'assets/img/restaurantimg/tomyumkitchen.png', name:'Tom Yum Kitchen',religion:'Asian',estimatedtime:'20',rating:3.8
    },
    {
      id:6,img:'assets/img/restaurantimg/tomyumkitchen.png', name:'Tom Yum Kitchen',religion:'Asian',estimatedtime:'20',rating:3.8
    },
    {
      id:7,img:'assets/img/restaurantimg/tomyumkitchen.png', name:'Tom Yum Kitchen',religion:'Asian',estimatedtime:'20',rating:3.8
    },
    {
      id:8,img:'assets/img/restaurantimg/tomyumkitchen.png', name:'Tom Yum Kitchen',religion:'Asian',estimatedtime:'20',rating:3.8
    },
    
    
  ]
  constructor(private router: Router, private httpClient: HttpClient) {}

@ViewChild('categoriesCard') categoriesCard!: ElementRef;
@ViewChild('nextButton') nextButton!: ElementRef;
@ViewChild('prevButton') prevButton!: ElementRef;
@ViewChild('favcategoriesCard') favcategoriesCard!: ElementRef;

  
isContentExpanded = false;
ngOnInit() {
  // Fetch restaurants from the backend
  this.httpClient.get<any[]>('http://localhost:8080/restaurants')
  .subscribe(data => {
    console.log(data);

    // Check if the data is an array and not empty
    if (Array.isArray(data) && data.length > 0) {
      // Assuming each element in the array represents a different merchant
      this.shop = data.map((merchant, index) => ({
        id: index + 1,
        uuid: merchant.uuid, // You may want to adjust this based on your actual data
        img: merchant.merchantImage,
        name: merchant.merchantName,
        religion: merchant.merchantType,
        estimatedtime: merchant.duration, // You may need to update this based on your data
        rating: 4.0, // You may need to update this based on your data
      }));

      this.isContentExpanded = this.shop.length > 5;
    }
  });
}

  
toggleContent() {
  this.isContentExpanded = !this.isContentExpanded;
}



ngAfterViewInit() {
  const cardElement = this.categoriesCard.nativeElement;
  cardElement.addEventListener('scroll', () => {
    this.checkButtonVisibility(cardElement);
    
  });
  this.prevButton.nativeElement.style.display = 'none';
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




 
    openRestaurantDetail(shop: any) {
        // Navigate to the restaurant detail page, passing the shop ID as a route parameter
        this.router.navigate(['/restaurant-detail', shop.uuid,shop.name]);
    }

}
