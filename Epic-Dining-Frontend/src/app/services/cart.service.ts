import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:9000/cart';

  constructor(private http: HttpClient) { }

  saveCart(userEmail: string, cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/save/${userEmail}`, cart);
  }

  getCartsByUserId(userEmail: string): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.baseUrl}/get/${userEmail}`);
  }

  deleteCartItem(userEmail: string, cartId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${userEmail}/${cartId}`);
  }

}
