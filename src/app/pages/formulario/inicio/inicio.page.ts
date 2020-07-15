import { Component, OnInit } from '@angular/core';
import { PersonaService, Persona } from '../../../services/persona.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  private persona: Observable<Persona[]>;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona=this.personaService.getPersona();
  }

  
}
