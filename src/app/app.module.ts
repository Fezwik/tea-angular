import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './shared/header-navigation/header-navigation.component';
import { FooterRightsComponent } from './shared/footer-rights/footer-rights.component';
import { MainComponent } from './features/main/main/main.component';
import { CatalogComponent } from './features/products/catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import { ProductCardComponent } from './features/products/catalog/product-card/product-card.component';
import { OrderComponent } from './features/order/order/order.component';
import { ProductComponent } from './features/products/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { ValidationDirective } from './shared/directives/validation.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {MainModule} from "./features/main/main.module";
import {OrderModule} from "./features/order/order.module";
import {ProductsModule} from "./features/products/products.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MainModule,
    OrderModule,
    ProductsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
