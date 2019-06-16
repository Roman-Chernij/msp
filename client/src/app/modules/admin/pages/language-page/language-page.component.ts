import { Component, OnInit } from '@angular/core';
import { LanguageInterface } from '@app/shared/interfaces/language.interface';
import { LanguageService } from '@app/modules/admin/service/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'msp-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.scss']
})
export class LanguagePageComponent implements OnInit {

  language: LanguageInterface[];
  isLoaded: boolean;

  constructor(
    private languageService: LanguageService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.isLoaded = false;
    this.languageService.getLanguage().subscribe(res => {
      this.language = res;
      this.isLoaded = true;
    });
  }

  edit(id): void {
    this.router.navigate([`admin/language/edit/${id}`]);
  }

  remove(id: string): void {
    this.languageService.deleteLanguage(id).subscribe(res => {
      this.language = this.language.filter(item => item._id !== id);
    });
  }

  activate(id: string, language: LanguageInterface) {
    const lang = {
      ...language
    };
    delete lang._id;
    delete lang.__v;
    this.languageService.updateLanguage(id, {...language, active: true})
      .subscribe(res => this.onlyOneActive(res));
  }

  onlyOneActive(response: LanguageInterface):void {
    this.language = this.language.map(lang => (
      {
        ...lang,
        active: lang._id === response._id
      }
    ))
  }
}
