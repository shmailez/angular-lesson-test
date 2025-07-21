import { Component, OnInit } from '@angular/core';
import * as productsData from "../../helpers/products.json";

interface Product {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    this.products = (productsData as any).default;
  }
}
