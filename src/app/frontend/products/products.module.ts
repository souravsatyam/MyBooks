import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products.component';
import { AppRouting } from '../../router/app/app.router';
import { MatCardModule , MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
