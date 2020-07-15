import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngContaduriaPageRoutingModule } from './tsu-ing-contaduria-routing.module';

import { TsuIngContaduriaPage } from './tsu-ing-contaduria.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngContaduriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngContaduriaPage]
})
export class TsuIngContaduriaPageModule {}
