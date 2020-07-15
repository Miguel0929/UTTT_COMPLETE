import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-gestion-proyecto',
  templateUrl: './gestion-proyecto.page.html',
  styleUrls: ['./gestion-proyecto.page.scss'],
})
export class GestionProyectoPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'Mtria. Gestion de Proyectos',
      redirectTo: '/maestrias/gestion-proyecto'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
