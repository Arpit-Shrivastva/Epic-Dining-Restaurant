import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Query } from '../Models/query';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private httpCleint: HttpClient) { }

  endPoint = "http://localhost:9000/query/";

  postQuery(query: Query): Observable<Query> {
    return this.httpCleint.post<Query>(`${this.endPoint}post`, query);
  }

  getQuery(): Observable<Query[]> {
    return this.httpCleint.get<Query[]>(`${this.endPoint}fetch`);
  }

}
