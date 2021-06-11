import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import {AngularMaterialModule} from "../../Modules/angular-material.module";



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class DynamicFormsModule { }
