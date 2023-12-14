import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderLogoComponent} from "../header-logo/header-logo.component";
import {HeaderContactsComponent} from "../header-contacts/header-contacts.component";
import {HeaderMenuComponent} from "../header-menu/header-menu.component";



@NgModule({
  declarations: [
    HeaderLogoComponent,
    HeaderContactsComponent,
    HeaderMenuComponent
  ],
  exports: [
    HeaderLogoComponent,
    HeaderMenuComponent,
    HeaderContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
