import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BarAppFrontend';
  public products: Product[];

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getEmployees().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }
}
