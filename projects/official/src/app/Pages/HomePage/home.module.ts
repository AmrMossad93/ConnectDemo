import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {ReUsableComponentsModule} from "../../../../../../Widgets/Components/ReUsableComponents/re-usable-components.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReUsableComponentsModule
  ]
})
export class HomeModule { }
