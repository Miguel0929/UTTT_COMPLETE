import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MvPageRoutingModule } from './mv-routing.module';

import { MvPage } from './mv.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MvPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MvPage]
})
export class MvPageModule {}
