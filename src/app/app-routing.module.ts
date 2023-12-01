import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tp1Component } from './tp1/tp1.component';
import { Routes } from '@angular/router';
import { LandinPageComponentComponent } from './landin-page-component/landin-page-component.component';


const routes: Routes = [
  {
    path:"achref",
    component:Tp1Component,
  
  },
  {
    path:'', 
    component:LandinPageComponentComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
