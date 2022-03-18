import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

//Cuando la ruta ese vacia nos cargue el dashboard
const routes: Routes = [
  {path: '', component: DashboardComponent, children : [
    //Con el children ya podemos agregar rutas dentro de la ruta del dashboard
    //por ejemplo para ingresar a usuarios seria local:dashboard/usuarios
    //la ruta que dejamos vacia seria el inicio
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'reportes', component: ReportesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
