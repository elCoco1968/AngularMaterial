import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Utilizamos al inciioo pero lo podemos simplificar con un routerLink, tener en cuenta al momento de la ruta poner el /
  //utilizando el routing para navegar, aca podriamos validar si tiene token que lo devuelva al dashboard, si no al login
  btnReturn(){
    this.router.navigate(['dashboard'])
  }

}
