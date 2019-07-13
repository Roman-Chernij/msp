import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageService } from '@app/modules/admin/service/language.service';
import { LanguageInterface } from '@app/shared/interfaces/language.interface';

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
      const active = languages.find(language => language.active);
      this.languages = languages;
      if (active) {
        this.languageService.defaultLanguage = active;
        this.languagesActive = active;
        this.changeActive$.emit(active);
      } else {
        this.changeActive$.emit(null);
      }
    });
  }

  public changeActive(language) {
    if (!this.languagesActive || (this.languagesActive._id !== language._id)) {
      this.languagesActive = language;
      this.changeActive$.emit(language);
    }
  }
}
