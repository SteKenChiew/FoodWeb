import {  Component, ViewEncapsulation, ElementRef, Renderer2, ViewChild } from '@angular/core';

interface Categories {
  type: string;
  logo: string;
}

interface Categoriesfood {
  img: string;
  type: string;
  name: string;
  price: number;
  desc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '/header.css','/footer.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'my-first-project';
  items: Categories[] = [
    { type: 'Western', logo: 'assets/img/burger.png' },
    { type: 'Asian Delights', logo: 'assets/img/mee.png' },
    { type: 'Quick Bites', logo: 'assets/img/muffin.png' },
    { type: 'Beverages', logo: 'assets/img/drinks.png' },
    { type: 'Desserts', logo: 'assets/img/icecream.png' },
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
  selectedCategory: string = 'Beverages'; 

  selectCategory(category: string) {
    this.selectedCategory = category; // Set the selected category
  }

  
  filterCategory(category: string) {
    this.selectedCategory = category; // Set the selected category
  }


  @ViewChild('categoriesCard') categoriesCard!: ElementRef;

  nextCard() {
    const container = this.categoriesCard.nativeElement;
    const cardWidth = 436; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft += scrollAmount;
  }

  previousCard() {
    const container = this.categoriesCard.nativeElement;
    const cardWidth = 436; // Adjust this value based on your card width
    const scrollAmount = cardWidth; // Scroll by one card width
    container.scrollLeft -= scrollAmount;
  }

  isContentExpanded = true;
  toggleContent() {
    this.isContentExpanded = !this.isContentExpanded;
  }
  
  
  
  

  
}
