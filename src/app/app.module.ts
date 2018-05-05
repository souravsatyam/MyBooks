import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRouting } from './router/app/app.router';
 import { HeaderModule } from './frontend/header/header.module';
 import { FooterModule } from './frontend/footer/footer.module';
 import { IndexModule } from './frontend/index/index.module';
 import { LandingModule } from './frontend/landing/landing.module';
 import { ProductsModule } from './frontend/products/products.module';
 import { ProductsDescriptionModule } from './frontend/products-description/products-description.module';
 import { SignupModule } from './frontend/signup/signup.module';
 import { ProfileModule } from './frontend/profile/profile.module';
 import { MyCartModule } from './frontend/my-cart/my-cart.module';

 

 import { MatCardModule , MatButtonModule } from '@angular/material';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatInputModule} from '@angular/material/input';
 
 
 
  //-------------------- Angular Material Module --------------------------- //
  
  
 
 
 
 
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HeaderModule,
    FooterModule,
    IndexModule,
    LandingModule,
    ProductsModule,
    ProductsDescriptionModule,
    SignupModule,
    ProfileModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MyCartModule

  
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
