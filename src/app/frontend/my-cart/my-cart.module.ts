import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './component/my-cart.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [MyCartComponent]
})
export class MyCartModule { }
