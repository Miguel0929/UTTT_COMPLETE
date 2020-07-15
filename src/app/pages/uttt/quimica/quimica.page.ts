import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-quimica',
  templateUrl: './quimica.page.html',
  styleUrls: ['./quimica.page.scss'],
})
export class QuimicaPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Quimica Industrial',
      redirectTo: '/uttt/quimica/tsu-ing-industrial'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Nanotecnologia',
      redirectTo: '/uttt/quimica/tsu-ing-nanotecnologia'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Quimica Ambiental',
      redirectTo: '/uttt/quimica/tsu-ing-ambiental'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

