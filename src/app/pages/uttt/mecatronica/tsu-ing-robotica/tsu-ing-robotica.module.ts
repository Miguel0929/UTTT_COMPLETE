import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngRoboticaPageRoutingModule } from './tsu-ing-robotica-routing.module';

import { TsuIngRoboticaPage } from './tsu-ing-robotica.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngRoboticaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngRoboticaPage]
})
export class TsuIngRoboticaPageModule {}
