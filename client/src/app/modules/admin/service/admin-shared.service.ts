import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class AdminSharedService {

  @Output() addPageTitle: EventEmitter<string> = new EventEmitter;

  public adminNavigation = [
    {
      title: 'Языки',
      url: '',
      icon: 'language'
    },
    {
      title: 'Навигация',
      url: 'navigation',
      icon: 'navigation'
    },
    {
      title: 'Социальные сети',
      url: 'social',
      icon: 'people'
    },
    {
      title: 'О мне',
      url: 'about',
      icon: 'person_pin_circle'
    },
    {
      title: 'Образование',
      url: 'education',
      icon: 'local_library'
    },
    {
      title: 'Опыт работы',
      url: 'experience',
      icon: 'label'
    },
    {
      title: 'Портфолио',
      url: 'portfolio',
      icon: 'work'
    }
  ];
}
