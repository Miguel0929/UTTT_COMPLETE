import { Injectable } from '@angular/core';
import {map, take } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { promise } from 'protractor';


export interface Persona{
    id?: string;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    carrera: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private persona: Observable<Persona[]>
  private personaCollection: AngularFirestoreCollection<Persona>;

  constructor(private db: AngularFirestore) { 
    this.personaCollection=this.db.collection<Persona>('persona');
    this.persona=this.personaCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
          return{id,...data}
        });
      })
    );
  }

  // Create
  createPersona(persona: Persona): Promise<DocumentReference> {
    return this.personaCollection.add(persona)
  }


  // Get Single
  getPersonaId(id: string): Observable<Persona>{
    return this.personaCollection.doc<Persona>(id).valueChanges().pipe(
      take(1),
      map(idea=>{
        idea.id=id;
        return idea
      })
    );
  }

  
  // Update
  updatePersona(persona: Persona): Promise<void> {
    return this.personaCollection.doc(persona.id).update(
      {nombre: persona.nombre,
        apellidos: persona.apellidos,
        correo: persona.correo,
        telefono: persona.telefono,
        carrera: persona.carrera
       }
    )
  }

  // Delete
  deletePersona(id: string): Promise<void> {
    return this.personaCollection.doc(id).delete();
  }

  //obtener lista
  getPersona(): Observable<Persona[]>{
    return this.persona;
  }
}
