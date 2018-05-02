import { ModuleWithProviders }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../../frontend/index/component/index.component';
import { LandingComponent } from '../../frontend/landing/component/landing.component';
import { ProductsComponent } from '../../frontend/products/component/products.component';
import { ProductsDescriptionComponent } from '../../frontend/products-description/component/products-description.component';
import { SignupComponent } from '../../frontend/signup/component/signup.component';
import { ProfileComponent } from '../../frontend/profile/component/profile.component';

const routes: Routes = [

  

         { path: '', component: IndexComponent, pathMatch: 'full' },
         {
            path: 'home',
            component: IndexComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full',
                    
                },
                {
                path: 'index',
                component: LandingComponent,
                
                },
                {
                    path: 'products',
                    component: ProductsComponent,
                    
                },
                {
                    path: 'products-description',
                    component: ProductsDescriptionComponent,
                    
                },
                {
                    path: 'Sign-Up',
                    component: SignupComponent,
                    
                },
                {
                    path: 'profile',
                    component: ProfileComponent,
                    
                },
                
                
               
                

                
            

            ]
        }
    
    



]

export const AppRouting: ModuleWithProviders= RouterModule.forRoot(routes,{ enableTracing: false, useHash: true });
