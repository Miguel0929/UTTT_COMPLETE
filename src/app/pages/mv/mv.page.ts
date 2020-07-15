import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-mv',
  templateUrl: './mv.page.html',
  styleUrls: ['./mv.page.scss'],
})
export class MvPage implements OnInit {

  facultades: Facultad[] = [
    {
      icon: 'calculator-outline',
      name: 'Contaduria',
      redirectTo: '/mv/contaduria'
    },
    {
      icon: 'bar-chart-outline',
      name: 'Desarrollo de Negocios',
      redirectTo: '/mv/des-negocios'
    },
    {
      icon: 'rocket-outline',
      name: 'Mecatronica',
      redirectTo: '/mv/macatronica'
    },
    {
      icon: 'flask-outline',
      name: 'Quimica',
      redirectTo: '/mv/quimica'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
