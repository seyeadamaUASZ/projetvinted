import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatPage } from './etat.page';

const routes: Routes = [
  {
    path: '',
    component: EtatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatPageRoutingModule {}
