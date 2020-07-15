import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-macatronica',
  templateUrl: './macatronica.page.html',
  styleUrls: ['./macatronica.page.scss'],
})
export class MacatronicaPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING Automatizacion',
      redirectTo: '/mv/macatronica/tsu-ing-automatizacion'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
