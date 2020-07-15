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
      name: 'TSU. Logistica Terrestre',
      redirectTo: '/mv/des-negocios/tsu-logistica'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. Mercadotecnia',
      redirectTo: '/mv/des-negocios/tsu-merca'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
