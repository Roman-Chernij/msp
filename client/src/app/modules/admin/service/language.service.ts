import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '@app/misc/config';
import { ApiService } from '@app/shared/services/api.service';
import { LanguageInterface } from '@app/shared/interfaces/language.interface';

@Injectable()
export class LanguageService {

  defaultLanguage: LanguageInterface;

  constructor(private api: ApiService) {}

  public getLanguage(): Observable<any> {
    return this.api.get(config.path.LANGUAGE);
  }

  public upDateLanguage(id: string, language: LanguageInterface): Observable<any> {
    return this.api.patch(`${config.path.LANGUAGE}/${id}`, language);
  }
  public saveLanguage(language: LanguageInterface): Observable<any> {
    return this.api.post(config.path.LANGUAGE, language)
  }
  public deleteLanguage(id: string): Observable<any> {
    return this.api.delete(`${config.path.LANGUAGE}/${id}`);
  }
}
