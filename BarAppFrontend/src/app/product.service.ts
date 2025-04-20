import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiServerUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
  }

  public addEmployee(product: any): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/product/add`, product);
  }
  public updateEmployee(product: any): Observable<Product> {
    return this.http.put<Product>(
      `${this.apiServerUrl}/product/update`,
      product,
    );
  }
  public deleteEmployee(productId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/product/delete/${productId}`,
    );
  }
  public getEmployeeById(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.apiServerUrl}/product/find/${productId}`,
    );
  }
}
