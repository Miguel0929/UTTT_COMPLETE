import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuLicMercaPageRoutingModule } from './tsu-lic-merca-routing.module';

import { TsuLicMercaPage } from './tsu-lic-merca.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuLicMercaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuLicMercaPage]
})
export class TsuLicMercaPageModule {}
