import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Comp1Component } from 'src/app/componentes/comp1/comp1.component';
import { Comp2Component } from 'src/app/componentes/comp2/comp2.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,Comp1Component,Comp2Component]
})
export class HomePageModule {}
