import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BoxComponent } from './box/box.component';
import {AngularMaterialModule} from "../../Modules/angular-material.module";



@NgModule({
  declarations: [
    JumbotronComponent,
    BoxComponent
  ],
  exports: [
    JumbotronComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ReUsableComponentsModule { }
