import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService, Persona } from 'src/app/services/persona.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  persona: Persona = {
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    carrera:""
  };
  constructor(
    private activedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private toastCtrl: ToastController,
    private router: Router) { }


  ngOnInit() {
    let id = this.activedRoute.snapshot.paramMap.get('id');
    if (id){
      this.personaService.getPersonaId(id).subscribe(persona => {
        this.persona = persona;
      });
    }
  }

  add(){
    this.personaService.createPersona(this.persona).then(() => {
    this.router.navigateByUrl('/');
    this.showToast('Gracias por hacer el registro! Muy pronto nos pondremos en contacto contigo :)');
    }, err => {
      this.showToast('Hay un problema en el registro! :o');
    });
  }
  /* delete(){
    this.personaService.deletePersona(this.persona.id).then(()=>{
    this.router.navigateByUrl('/persona');
    this.showToast('Eliminado Correctamente');
    }, err=>{
      this.showToast("Hay un problema en Eliminar");
    })
  }
  update(){
    this.personaService.updatePersona(this.persona).then(()=>{
    this.showToast('Editado Correctamente');
    }, err=>{
      this.showToast("Hay un problema en Editar");
    })
  } */
  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
