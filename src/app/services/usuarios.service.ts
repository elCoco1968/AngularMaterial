import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listUsuarios: Usuario[] = [
    { usuario: 1, nombre: 'Kevin', apellido: 'Morales', sexo: 'H' },
    { usuario: 2, nombre: 'Janeth', apellido: 'Gomez', sexo: 'He' },
    { usuario: 3, nombre: 'Alfredo', apellido: 'Morales', sexo: 'Li' },
    { usuario: 4, nombre: 'Maria', apellido: 'Gomez', sexo: 'Be' },
    { usuario: 5, nombre: 'Boron', apellido: 'Saturno', sexo: 'B' },
    { usuario: 6, nombre: 'Carbon', apellido: 'Saturno', sexo: 'C' },
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
}
