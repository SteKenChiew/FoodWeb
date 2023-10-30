import { Component, ElementRef, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  
  items: Categories[] = [
    { type: 'Western', logo: 'assets/img/burger.png' ,img: "assets/img/favcategories/western.png"},
    { type: 'Asian Delights', logo: 'assets/img/mee.png' ,img: "assets/img/favcategories/asiandelights.png" },
    { type: 'Quick Bites', logo: 'assets/img/muffin.png',img: "assets/img/favcategories/fastfood.png" },
    { type: 'Beverages', logo: 'assets/img/drinks.png' ,img: "assets/img/favcategories/beverage.png"},
    { type: 'Desserts', logo: 'assets/img/icecream.png' ,img: "assets/img/favcategories/desserts.png"},
    { type: 'Desserts', logo: 'assets/img/icecream.png' ,img: "assets/img/favcategories/desserts.png"},
    { type: 'Desserts', logo: 'assets/img/icecream.png' ,img: "assets/img/favcategories/desserts.png"},
    { type: 'Desserts', logo: 'assets/img/icecream.png' ,img: "assets/img/favcategories/desserts.png"},
    { type: 'Desserts', logo: 'assets/img/icecream.png' ,img: "assets/img/favcategories/desserts.png"},

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
  @ViewChild('categoriesCard') categoriesCard!: ElementRef;

  nextCard() {
    const container = this.categoriesCard.nativeElement;
    const cardWidth = 1200; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft += scrollAmount;
  }

  previousCard() {
    const container = this.categoriesCard.nativeElement;
    const cardWidth = 1200; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft -= scrollAmount;
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


  

}
