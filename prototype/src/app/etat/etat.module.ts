import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatPageRoutingModule } from './etat-routing.module';

import { EtatPage } from './etat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatPageRoutingModule
  ],
  declarations: [EtatPage]
})
export class EtatPageModule {}
