import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService) { }

  endPoint = "http://localhost:9000/auth/";
  updatePoint = "http://localhost:9000/user/"

  loginEndPoint(login:Login): Observable<string>{
    return this.httpClient.post(`${this.endPoint}login`, login, { responseType: 'text' });
  }

  getUsersEndPoint(): Observable<Login[]> {
    return this.httpClient.get<Login[]>(`${this.endPoint}allUsers`);
  }

  forgotEndPoint(login:Login, userEmail:string):Observable<Login>{
    const token = this.tokenService.getHeaders();
    const token_ = { headers : token};
    return this.httpClient.put<Login>(`${this.updatePoint}updatePassword/${userEmail}`, login, token_);
  }

  getUserEmails(): Observable<Login>{
    return this.httpClient.get<Login>(`${this.endPoint}emails`);
  }
}
