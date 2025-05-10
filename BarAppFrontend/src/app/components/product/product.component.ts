import { Component } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
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
