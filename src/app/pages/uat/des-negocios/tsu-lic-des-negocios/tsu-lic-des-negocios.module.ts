import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuLicDesNegociosPageRoutingModule } from './tsu-lic-des-negocios-routing.module';

import { TsuLicDesNegociosPage } from './tsu-lic-des-negocios.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuLicDesNegociosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuLicDesNegociosPage]
})
export class TsuLicDesNegociosPageModule {}
