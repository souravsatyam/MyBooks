import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './component/landing.component';
import { AppRouting } from '../../router/app/app.router';
import { MatCardModule , MatButtonModule } from '@angular/material';



 //------------------ END HERE ----------------------------------------  //

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    MatCardModule,
    MatButtonModule
   
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
