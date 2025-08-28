import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './components/common/header-navigation/header-navigation.component';
import { FooterRightsComponent } from './components/common/footer-rights/footer-rights.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import { ProductCardComponent } from './components/pages/catalog/product-card/product-card.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductComponent } from './components/pages/product/product.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ShortTextPipe } from './pipes/short-text.pipe';
import { ValidationDirective } from './directives/validation.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    FooterRightsComponent,
    MainComponent,
    CatalogComponent,
    ProductCardComponent,
    OrderComponent,
    ProductComponent,
    ShortTextPipe,
    ValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
