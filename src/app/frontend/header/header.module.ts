import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header.component';
import { AppRouting } from '../../router/app/app.router';
@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  exports: [
    HeaderComponent 
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
