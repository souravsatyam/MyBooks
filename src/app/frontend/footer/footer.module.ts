import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer.component';
import { AppRouting } from '../../router/app/app.router';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  exports: [
    FooterComponent 
  ],
  declarations: [FooterComponent]
})
export class FooterModule { }
