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
      name: 'TSU. Quimica Industrial',
      redirectTo: '/mv/quimica/industrial'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
