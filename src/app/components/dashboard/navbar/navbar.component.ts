import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private menuServices: MenuService) { }


  //Inicializamos el Menu en vacio, en el vamos a ingresar los datos
  menu: Menu[] = [];

  //Inicializando con cargarMenu
  ngOnInit(): void {
    this.cargarMenu()
  }

  //Funcion para cargar el menu
  cargarMenu(){
    this.menuServices.getMenu().subscribe(data => {
      this.menu = data;
      console.log(this.menu)
    });
  }

}
