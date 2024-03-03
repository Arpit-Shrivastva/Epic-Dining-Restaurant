import { Injectable } from '@angular/core';
import { Payment } from '../Models/payment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  endPint = "http://localhost:9000/payment";

  createOrder(payment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(`${this.endPint}/createOrder`, payment);
  }
}
