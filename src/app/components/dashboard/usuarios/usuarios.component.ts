import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  //Array de elementos
  

  listUsuarios: Usuario[] = [];
  dataSource!: MatTableDataSource<any>
  //Paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //sort
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Columnas deben hacer match con los del HTML
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  //Lo comentamos para poder crear la tabla de listado
  //dataSource = listUsuarios;
  //dataSource = new MatTableDataSource(this.listUsuarios);

  constructor(private usuariosService : UsuariosService, private _snackBar: MatSnackBar) { }

  
  cargarUsuarios(){
    this.listUsuarios = this.usuariosService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  //filtrado Component
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index : number){
    this.usuariosService.eliminarUsuario(index);
    this.cargarUsuarios();
    this._snackBar.open('Usuario eliminado', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
    
  }

}
