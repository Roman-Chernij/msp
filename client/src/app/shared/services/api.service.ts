import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '@app/shared/services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService) {console.log(this);}

  public get(path): Observable<any> {
    return this.http.get(`${environment.url}${path}`, this.httpOptions);
  }

  public post(path: string, body): Observable<any> {
    return this.http.post(`${environment.url}${path}`, body, this.httpOptions)
      .pipe(
      catchError(err => this.handleError(err))
    );
  }

  public patch(query: string, body: any): Observable<any> {
    return this.http.patch(`${environment.url}${query}`, body, this.httpOptions)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  public delete(query: string): Observable<any> {
    return this.http.delete(`${environment.url}${query}`, this.httpOptions)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      window.console.error('API Service Error:', error.error.message);

    } else {
      window.console.error(
        `API Service Error -- CODE: ${error.status}, ` +
        `BODY: ${JSON.stringify(error.error, null, 3)}`
      );

      if (error.status === 401) {
        this.auth.logOut();
      }
    }

    const msg = error.error
      ? error.error.error_description || error.error.message
      : error.message || error.statusText;

    return throwError(msg);
  }
}
