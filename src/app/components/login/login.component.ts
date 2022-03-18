import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  //variable para spinner
  loading = false;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }


  ingresar(){
    console.log(this.form)
    //Capturando los valores
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;
    //Viendo los datos recuperados
    console.log(usuario)
    console.log(contraseña)

    if(usuario == "kevinMorales" && contraseña =="123456"){
      //Redireccionamos al dashboard
      this.fakeLoading();
    }else{
      //Mostramos un error
      this.error();
      //Reseteamos el form
      this.form.reset();
    }
    //IMPORTANTE: teniendo un backend enviamos una peticion y en base a lo que 
    //nos responda el backend hacemos las acciones correspondientes
   
  }
  //Creamos una funcion de error y le asignamos un componente de error de angular material
  //Podemos usar angular material o swal alert2
  error(){
    this._snackBar.open('Usuario o contraseña incorrecto', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  //Alterta swal alert2
  // error(){
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Usuario o contraseña incorrecto',
  //   })
  // }


  //Con este metodo le estamos diciendo que nos ponga el loading true y que despues de 1500ms nos la ponga falsa
  fakeLoading(){
    this.loading = true;
    setTimeout(() =>{
      //y rediccionamos al home o dashboard
      // this.loading = false;
      this.router.navigate(['dashboard']);
    }, 1500);
  }
  

}
