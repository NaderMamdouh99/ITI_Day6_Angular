import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Core/home/home.component';
import { ProductsComponent } from './components/Core/products/products.component';
import { ContactusComponent } from './components/Core/contactus/contactus.component';
import { NotfoundComponent } from './components/Core/notfound/notfound.component';
import { OrdersComponent } from './components/Core/orders/orders.component';
import { ProdctdetailsComponent } from './components/Core/prodctdetails/prodctdetails.component';
import { ProductFormComponent } from './components/Core/product-form/product-form.component';
import { ReactiveFormsComponent } from './components/Core/reactive-forms/reactive-forms.component';
import { authnGuard } from './Guards/authn.guard';
import { AboutMeComponent } from './components/Core/about-me/about-me.component';
import { SignUpComponent } from './components/Core/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',redirectTo:''},
  {path:'home',redirectTo:''},
  {path:'product',component:ProductsComponent,canActivate:[authnGuard]},
  {path:'product/details/:id',component:ProdctdetailsComponent,canActivate:[authnGuard]},
  {path:'product/edit/:id',component:ProductFormComponent,canActivate:[authnGuard]},
  {path:'product/new',component:ProductFormComponent,canActivate:[authnGuard]},
  {path:'contact',component:ContactusComponent},
  {path:'orders',component:OrdersComponent},
  {path:'About',component:AboutMeComponent},
  {path:'Login',component:ReactiveFormsComponent},
  {path:'signup',component:SignUpComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
