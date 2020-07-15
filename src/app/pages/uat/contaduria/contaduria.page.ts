import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-contaduria',
  templateUrl: './contaduria.page.html',
  styleUrls: ['./contaduria.page.scss'],
})
export class ContaduriaPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. y Lic. Contaduria',
      redirectTo: '/uat/contaduria/tsu-lic-contaduria'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
