import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageService } from '@app/modules/admin/service/language.service';
import { LanguageInterface } from '@app/shared/interfaces/language.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'msp-admin-language-check',
  templateUrl: './admin-language-check.component.html',
  styleUrls: ['./admin-language-check.component.scss']
})
export class AdminLanguageCheckComponent implements OnInit {

  @Output() changeActive$: EventEmitter<LanguageInterface> = new EventEmitter();

  public languages: Observable<LanguageInterface[]>;
  public languagesActive: LanguageInterface;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguage().subscribe(languages => {
      const active = languages.find(language => language.langKey.toLowerCase() === 'en');
      this.languageService.defaultLanguage = active;
      this.languagesActive = active;
      this.languages = languages;
      this.changeActive$.emit(active);
    });
  }

  public changeActive(language) {
    this.languagesActive = language;
    this.changeActive$.emit(language);
  }
}
