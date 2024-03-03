import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../Models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private endPoint = 'http://localhost:9000/address';

  constructor(private httpClient: HttpClient) { }

  getAllUserAddresses(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(`${this.endPoint}/getAll`);
  }

  getAddressById(addressId: string): Observable<Address> {
    return this.httpClient.get<Address>(`${this.endPoint}/get/${addressId}`);
  }

  saveUserAddress(userAddress: Address): Observable<Address> {
    return this.httpClient.post<Address>(`${this.endPoint}/save`, userAddress);
  }

  deleteUserAddress(addressId: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.endPoint}/delete/${addressId}`);
  }
}
