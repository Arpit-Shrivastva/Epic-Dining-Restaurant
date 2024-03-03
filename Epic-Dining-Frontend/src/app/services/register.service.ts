import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../Models/register';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService) { }

  endPoint = "http://localhost:9000/user/";

  registerSaveEndPoint(register: Register): Observable<Register> {
    return this.httpClient.post<Register>(`${this.endPoint}signUp`, register);
  }

  getAllUser(): Observable<Register[]> {
    const token = this.tokenService.getHeaders();
    const token_ = { headers: token };
    return this.httpClient.get<Register[]>(`${this.endPoint}`,token_);
  }

  getUser(): Observable<Register> {
    return this.httpClient.get<Register>(`${this.endPoint}`);
  }

  updateUser(register: Register, userEmail: string): Observable<Register> {
    return this.httpClient.put<Register>(`${this.endPoint}/cafe/updateUser/${userEmail}`, register);
  }

  deleteUser(userEmail: string): Observable<any> {
    return this.httpClient.delete(`${this.endPoint}/cafe/deleteUser/${userEmail}`);
  }
}
