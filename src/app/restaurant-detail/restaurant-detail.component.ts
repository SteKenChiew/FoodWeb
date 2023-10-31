import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



interface Restaurantfood {
  img: string;
  type: string;
  category: string;
  name: string;
  price: number;
  desc: string;
  qty_sold: number;
  
}

interface FoodCategories{
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
export class RestaurantDetailComponent {


  foodfilter: FoodCategories[] = [
    {name: "Autumn"},
    {name: "dog"},
  ]


  foodcategories: Restaurantfood[] = [
    {
      img: '',
      type: 'Asian Delights',
      category: "Autumn",
      name: 'Hainanese Chicken Rice',
      price: 7.50,
      desc: 'Ji Fan',
      qty_sold: 3,
    },
    {
      img: '',
      type: 'Asian Delights',
      category: "Autumn",
      name: 'Pad Thai 1',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 4,
    },
    {
      img: '',
      type: 'Asian Delights',
      category: "Autumn",
      name: 'Pad Thai 2',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 10,
    },
    {
      img: 'assets/img/lenzaidev.jpg',
      type: 'Western',
      category: "Autumn",
      name: 'Burger',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 100,
    },
    {
      img: 'assets/img/zus.jpg',
      type: 'Beverages',
      category: "dog",
      name: 'Zus',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 3,
    },{
      img: '',
      type: 'Asian Delights',
      category: "Autumn",
      name: 'Pad Thai 69',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 3,
    },
    {
      img: '',
      type: 'Asian Delights',
      category: "dog",
      name: 'Pad Thai 69',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 3,
    },
    {
      img: '',
      type: 'Asian Delights',
      category: "dog",
      name: 'Pad Thai 69',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 3,
    },
    {
      img: '',
      type: 'Asian Delights',
      category: "dog",
      name: 'Pad Thai 69',
      price: 8.50,
      desc: 'PADDDDDDDDDDDDDD THAIIIIIIIIIIIIIIIIIIII',
      qty_sold: 3,
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

  @ViewChild('categoriesCard') categoriesCard!: ElementRef;
@ViewChild('nextButton') nextButton!: ElementRef;
@ViewChild('prevButton') prevButton!: ElementRef;

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


  isContentExpanded = false;
  toggleContent() {
    this.isContentExpanded = !this.isContentExpanded;
  }


  constructor(private router: Router) {
  
  }


    getTop5FoodCategories() {
      // Sort the array in descending order based on qty_sold and slice the first 5.
      return this.foodcategories
        .sort((a, b) => b.qty_sold - a.qty_sold)
        .slice(0, 5);
    }

    

}
