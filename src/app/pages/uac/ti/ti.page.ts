import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-ti',
  templateUrl: './ti.page.html',
  styleUrls: ['./ti.page.scss'],
})
export class TiPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING Multiplataforma',
      redirectTo: '/uac/ti/tsu-ing-multiplataforma'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING Redes',
      redirectTo: '/uac/ti/tsu-ing-red'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
