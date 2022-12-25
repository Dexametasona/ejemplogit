import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';



@NgModule({
  declarations: [
    HeaderCompComponent,
    NavCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderCompComponent,
    NavCompComponent
  ]
})
export class HeaderModule { }
