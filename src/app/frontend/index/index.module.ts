import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './component/index.component';
import { AppRouting } from '../../router/app/app.router';
import { HeaderModule } from '../../frontend/header/header.module';
import { FooterModule } from '../../frontend/footer/footer.module';
@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    HeaderModule,
    FooterModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
