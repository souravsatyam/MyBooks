import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './component/profile.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
