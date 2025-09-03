import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderNavigationComponent} from "./header-navigation/header-navigation.component";
import {FooterRightsComponent} from "./footer-rights/footer-rights.component";
import {ValidationDirective} from "./directives/validation.directive";
import {ShortTextPipe} from "./pipes/short-text.pipe";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    HeaderNavigationComponent,
    FooterRightsComponent,
    ValidationDirective,
    ShortTextPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    HeaderNavigationComponent,
    FooterRightsComponent,
    ValidationDirective,
    ShortTextPipe,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }
