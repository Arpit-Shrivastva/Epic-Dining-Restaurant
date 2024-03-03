import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint = "http://localhost:9000/menu/"

  constructor(private http: HttpClient) { }

  saveMenuWithPhoto(menu: Product): Observable<Product> {
    return this.http.post<Product>(this.endPoint + 'save', menu);
  }

  getAllMenus(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endPoint}`);
  }

  getProductByName(productName: string): Observable<Product> {
    return this.http.get<Product>(`${this.endPoint}productName/${productName}`);
  }


  updateDescription(productId: string, menu: Product): Observable<Product> {
    return this.http.put<Product>(`${this.endPoint}updateDescription/${productId}`, menu);
  }

  updatePrice(productId: string, menu: Product): Observable<Product> {
    return this.http.put<Product>(`${this.endPoint}updatePrice/${productId}`, menu);
  }

  deleteProduct(productId: string): Observable<string> {
    return this.http.delete<string>(`${this.endPoint}deleteProduct/${productId}`);
  }
}
