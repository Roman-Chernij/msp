import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api.service';
import { Observable } from 'rxjs';
import { config } from '@app/misc/config';

@Injectable()
export class NavService {

  constructor(private api: ApiService) {}

  public getNavByID(id: string): Observable<any> {
    return this.api.get(`${config.path.NAVIGATION}/${id}`);
  }

  public saveNav(id: string, body: any): Observable<any> {
    return this.api.post(`${config.path.NAVIGATION}/${id}`, body);
  }

  public updateNav(id: string, body: any): Observable<any> {
    return this.api.patch(`${config.path.NAVIGATION}/${id}`, body);
  }

  public removeNav(id: string, body: any): Observable<any> {
    return this.api.delete(`${config.path.NAVIGATION}/${id}`);
  }
}
