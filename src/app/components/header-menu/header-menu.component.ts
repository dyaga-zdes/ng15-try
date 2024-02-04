import { Component } from '@angular/core';
import {ApiService} from "../../features/backend/api.service";


export interface Link {
  text: string;
  name?: string;
  path: any[] | string;
  redirect?: any[] | string;

  code?: string;
  fragment?: string;
  queryParams?: { [k: string]: any };
  children?: Link[];

  /** Если true, то не показывать ссылку */
  phantom?: boolean;

  /** Счетчик для доп. информации о ссылке */
  count?: number;
}


type MenuCollection = Record<string, Link[]>;

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {

  constructor(
    private apiService: ApiService
  ) {}

  items: Link[] | undefined;

  ngOnInit(){
    this.apiService.getData<MenuCollection>('menu.getData').subscribe(
      (response) => {
        this.items = response['main'];
      }
    );
  }

}
