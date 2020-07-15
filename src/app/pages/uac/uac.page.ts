import { Component, OnInit } from '@angular/core';
import { Facultad } from '../../interfaces/interfaces';

@Component({
  selector: 'app-uac',
  templateUrl: './uac.page.html',
  styleUrls: ['./uac.page.scss'],
})
export class UacPage implements OnInit {

  facultades: Facultad[] = [
    {
      icon: 'leaf-outline',
      name: 'Agricultura',
      redirectTo: '/uat/agricultura'
    },
    {
      icon: 'calculator-outline',
      name: 'Contaduria',
      redirectTo: '/uat/contaduria'
    },
    {
      icon: 'bar-chart-outline',
      name: 'Desarrollo de Negocios',
      redirectTo: '/uat/des-negocios'
    },
    {
      icon: 'code-working-outline',
      name: 'Tecnologias de la Informacion',
      redirectTo: '/uat/ti'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

