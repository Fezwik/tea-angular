import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {MainComponent} from "./main/main.component";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
    MainComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
  ]
})
export class MainModule { }
