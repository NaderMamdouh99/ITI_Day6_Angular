import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { AsideComponent } from './components/Shared/aside/aside.component';
import { HomeComponent } from './components/Core/home/home.component';
import { ContactusComponent } from './components/Core/contactus/contactus.component';
import { ProductsComponent } from './components/Core/products/products.component';
import { NotfoundComponent } from './components/Core/notfound/notfound.component';
import { OrdersComponent } from './components/Core/orders/orders.component';
import { ProdctdetailsComponent } from './components/Core/prodctdetails/prodctdetails.component';
import { ProductFormComponent } from './components/Core/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './components/Core/reactive-forms/reactive-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutMeComponent } from './components/Core/about-me/about-me.component';
import { SliderComponent } from './components/Shared/slider/slider.component';
import { SignUpComponent } from './components/Core/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ContactusComponent,
    ProductsComponent,
    NotfoundComponent,
    OrdersComponent,
    ProdctdetailsComponent,
    ProductFormComponent,
    ReactiveFormsComponent,
    AboutMeComponent,
    SliderComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
