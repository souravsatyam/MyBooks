import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products.component';
import { AppRouting } from '../../router/app/app.router';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
