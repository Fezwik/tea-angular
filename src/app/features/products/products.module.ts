import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductCardComponent} from "./catalog/product-card/product-card.component";
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    CatalogComponent,
    ProductCardComponent,
    ProductComponent,
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class ProductsModule { }
