import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageInterface } from '@app/shared/interfaces/language.interface';
import { LanguageService } from '@app/modules/admin/service/language.service';

@Component({
  selector: 'msp-language-create',
  templateUrl: './language-create.component.html',
  styleUrls: ['./language-create.component.scss']
})
export class LanguageCreateComponent implements OnInit {

  languageForm: FormGroup;
  languageID: string;
  isLoaded: boolean;
  languageServiceSubscribe;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.isLoaded = false;
    this.languageID = this.activeRouter.snapshot.params.id;
    if (this.languageID) {
      this.languageService.getLanguageById(this.languageID).subscribe(language => {
        this.languageFormInit(language);
      });
    } else {
      this.languageFormInit();
    }
  }

  languageFormInit(data?: LanguageInterface) {
    this.languageForm = new FormGroup({
      icon: new FormControl(data ? data.icon : '', [Validators.required]),
      title: new FormControl(data ? data.title : '', [Validators.required]),
      langKey: new FormControl(data ? data.langKey : '', [Validators.required]),
      active: new FormControl(data ? data.active : true, [Validators.required]),
      show: new FormControl(data ? data.show : true, [Validators.required])
    });
    this.isLoaded = true;
  }

  prev() {
    this.router.navigate(['/admin']);
  }

  submit() {
    if (this.languageID) {
      this.languageService.updateLanguage(this.languageID, this.languageForm.value).subscribe(res => {
        this.router.navigate(['/admin/language']);
      });
    } else {
      this.languageService.createLanguage(this.languageForm.value).subscribe(res => {
        this.router.navigate(['/admin/language']);
      });
    }
  }
}
