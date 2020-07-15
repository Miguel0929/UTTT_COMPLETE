import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-des-negocios',
  templateUrl: './des-negocios.page.html',
  styleUrls: ['./des-negocios.page.scss'],
})
export class DesNegociosPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. y LIC Mercadotecnia',
      redirectTo: '/uac/des-negocios/tsu-lic-merca'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. y LIC Ventas',
      redirectTo: '/uac/des-negocios/tsu-lic-ventas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
