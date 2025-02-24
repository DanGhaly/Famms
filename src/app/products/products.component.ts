import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true, // Marking it as standalone
  imports: [CommonModule], // Import necessary modules
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { image: 'assets/images/p1.png', name: "Men's Shirt", price: 75 },
    { image: 'assets/images/p2.png', name: "Men's Shirt", price: 80 },
    { image: 'assets/images/p3.png', name: "Woman's Dress", price: 80 },
    { image: 'assets/images/p4.png', name: "Woman's Dress", price: 75 },
    { image: 'assets/images/p5.png', name: "Woman's Dress", price: 80 },
    { image: 'assets/images/p6.png', name: "Woman's Dress", price: 70 },
    { image: 'assets/images/p7.png', name: "Woman's Dress", price: 75 },
    { image: 'assets/images/p8.png', name: "Men's Shirt", price: 58 },
    { image: 'assets/images/p9.png', name: "Men's Shirt", price: 80 },
    { image: 'assets/images/p10.png', name: "Men's Shirt", price: 65 },
    { image: 'assets/images/p11.png', name: "Men's Shirt", price: 65 },
    { image: 'assets/images/p12.png', name: "Woman's Dress", price: 65 }
  ];
}
