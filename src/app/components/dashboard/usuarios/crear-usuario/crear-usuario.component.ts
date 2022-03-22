import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  sexo: any[] = ['MASCULINO','FEMENIMO'];
  form : FormGroup;

  constructor(private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private router : Router,
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  aggUsuario(){

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    }
    console.log(user);
    this.usuarioService.aggUsuario(user)
    this.router.navigate(['/dashboard/usuarios']);
    this._snackBar.open('Usuario Creado', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  
}
