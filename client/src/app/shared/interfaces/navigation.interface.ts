import { NavigationItemInterface } from '@app/shared/interfaces/navigation-item.interface';

export interface NavigationInterface {
  _id?: string;
  langKey?: string;
  body: NavigationItemInterface[];
}
