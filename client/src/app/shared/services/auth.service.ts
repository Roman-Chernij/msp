import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { config } from '@app/misc/config';
import { UserInterface } from '@app/shared/interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS, DETELE',
      'Content-Type': 'application/json',
    })
  };
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public login(user: UserInterface): Observable<any> {
    return this.http.post(`${environment.url}${config.path.AUTH}`, user, this.httpOptions);
  }

  public auth(token): void {
    this.saveAuthData(token);
  }

  public logOut() {
    this.removeAuthData();
    this.router.navigate(['']);
  }

  public getToken(): string {
    let token;

    try {
      token = JSON.parse( sessionStorage.getItem(config['TOKEN-KEY']));
    } catch (e) {
      token = '';
    }
    return token;
  }

  private saveAuthData(token): void {
    window.sessionStorage.setItem(config['TOKEN-KEY'], JSON.stringify(token));
  }

  private removeAuthData(): void {
    window.sessionStorage.removeItem(config['TOKEN-KEY']);
  }
}
