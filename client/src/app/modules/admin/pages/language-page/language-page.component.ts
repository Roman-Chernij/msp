import { Component, OnInit } from '@angular/core';
import { LanguageInterface } from '../../../../shared/interfaces/language.interface';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'msp-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.scss']
})
export class LanguagePageComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'langKey', 'title', 'actions'];
  language: LanguageInterface[];
  isLoaded: boolean;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.isLoaded = false;
    this.languageService.getLanguage().subscribe(res => {
      this.language = res;
      this.language.map(item => {
          return {
          ...item,
            editable: false,
            new: false,
          };
      });
      this.language.push({
        editing: true,
        new: true,
        icon: '',
        langKey: '',
        title: ''
      });
      this.isLoaded = true;
    });
  }

  add(element): void {
    this.languageService.saveLanguage(element).subscribe(res => this.fetchData());
  }

  edit(element): void {
    this.language.map(item => {
      if (item._id === element._id) {
        item.editing = true;
      } else {
        item.editing = false;
      }
    });
  }

  remove(id: string): void {
    this.languageService.deleteLanguage(id).subscribe(res => this.fetchData());
  }


  save(element): void {
    this.languageService.upDateLanguage(element._id, element).subscribe(res => this.fetchData());
  }
}
