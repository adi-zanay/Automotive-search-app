import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcarsPageRoutingModule } from './newcars-routing.module';

import { NewcarsPage } from './newcars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcarsPageRoutingModule
  ],
  declarations: [NewcarsPage]
})
export class NewcarsPageModule {}
