import { Injectable } from '@angular/core';

import { ApiService } from '@app/shared/services/api.service';
import { Observable } from 'rxjs';
import { config } from '@app/misc/config';
import { UserInterface } from '@app/shared/interfaces/user.interface,ts';


@Injectable()
export class AuthService {

  config = config;

  constructor(private apiService: ApiService) {}

  login(user: UserInterface): Observable<any> {
    return this.apiService.post(this.config.path.AUTH, user);
  }
}
