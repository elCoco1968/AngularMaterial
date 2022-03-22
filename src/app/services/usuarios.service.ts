import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listUsuarios: Usuario[] = [
    { usuario: 1, nombre: 'Kevin', apellido: 'Morales', sexo: 'MASCULINO' },
    { usuario: 2, nombre: 'Janeth', apellido: 'Gomez', sexo: 'FEMENINO' },
    { usuario: 3, nombre: 'Alfredo', apellido: 'Morales', sexo: 'MASCULINO' },
    { usuario: 4, nombre: 'Maria', apellido: 'Gomez', sexo: 'FEMENINO' },
    { usuario: 5, nombre: 'Boron', apellido: 'Saturno', sexo: 'FEMENINO' },
    { usuario: 6, nombre: 'Carbon', apellido: 'Saturno', sexo: 'FEMENINO' },
    { usuario: 7, nombre: 'Nitrogen', apellido: 'Saturno', sexo: 'N' },
    { usuario: 8, nombre: 'Oxygen', apellido: 'Saturno', sexo: 'O' },
    { usuario: 9, nombre: 'Fluorine', apellido: 'Saturno', sexo: 'F' },
    { usuario: 10, nombre: 'Neon', apellido: 'Saturno', sexo: 'Ne' },
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index : number){
    this.listUsuarios.splice(index, 1);
  }

  aggUsuario(user : Usuario){
    this.listUsuarios.unshift(user)
  }
  
}
