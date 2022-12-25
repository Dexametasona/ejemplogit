import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCompComponent } from './content-comp/content-comp.component';
import { AsideCompComponent } from './aside-comp/aside-comp.component';



@NgModule({
  declarations: [
    ContentCompComponent,
    AsideCompComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
