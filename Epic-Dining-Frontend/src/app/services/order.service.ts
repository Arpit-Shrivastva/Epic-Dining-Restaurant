import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../Models/address';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  endPoint = "http://localhost:9000/orders"

  saveOrder(userEmail: string, order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.endPoint}/save/${userEmail}`, order);
  }

  getOrdersByUserId(userEmail: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.endPoint}/fetch/${userEmail}`);
  }

  getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.endPoint}/`);
  }

  deleteOrder(userEmail: string, orderId: string): Observable<void> {
    return this.http.delete<void>(`${this.endPoint}/delete/${userEmail}/${orderId}`);
  }

  saveAddressForOrder(userEmail: string, orderId: string, address: Address): Observable<Address> {
    return this.http.post<Address>(`${this.endPoint}/add/${userEmail}/${orderId}/address`, address);
  }
}
