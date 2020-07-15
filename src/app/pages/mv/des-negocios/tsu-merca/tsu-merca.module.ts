import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuMercaPageRoutingModule } from './tsu-merca-routing.module';

import { TsuMercaPage } from './tsu-merca.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuMercaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuMercaPage]
})
export class TsuMercaPageModule {}
