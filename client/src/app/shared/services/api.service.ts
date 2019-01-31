import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '@app/misc/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS, DETELE',
      'Content-Type': 'application/json',
    })
  };

  config = config;
  // environment = environment;

  url = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  get(path): Observable<any> {
    return this.http.get(`${this.url}${path}`, this.httpOptions);
  }

  post(path: string, queryParams): Observable<any> {
    return this.http.post(`${this.url}${path}`, queryParams, this.httpOptions);
  }
}
