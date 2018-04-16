import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlayxoComponent} from './playxo/playxo.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  {path: "playxo", component: PlayxoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
