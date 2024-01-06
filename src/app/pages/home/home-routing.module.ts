import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Comp1Component } from 'src/app/componentes/comp1/comp1.component';
import { Comp2Component } from 'src/app/componentes/comp2/comp2.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:"uno",
        component:Comp1Component
      },
      {
        path:"dos",
        component:Comp2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
