import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hom1PageRoutingModule } from './hom1-routing.module';

import { Hom1Page } from './hom1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hom1PageRoutingModule
  ],
  declarations: [Hom1Page]
})
export class Hom1PageModule {}
