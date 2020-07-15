import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-pro-industriales',
  templateUrl: './pro-industriales.page.html',
  styleUrls: ['./pro-industriales.page.scss'],
})
export class ProIndustrialesPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Operaciones Industriales',
      redirectTo: '/uttt/pro-industriales/tsu-ing-ope-industriales'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Montaje de Plantas',
      redirectTo: '/uttt/pro-industriales/tsu-ing-mont-plantas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
