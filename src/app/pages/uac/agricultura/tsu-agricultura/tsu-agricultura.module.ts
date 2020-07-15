import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuAgriculturaPageRoutingModule } from './tsu-agricultura-routing.module';

import { TsuAgriculturaPage } from './tsu-agricultura.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuAgriculturaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuAgriculturaPage]
})
export class TsuAgriculturaPageModule {}
