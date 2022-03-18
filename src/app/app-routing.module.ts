import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  //que me redireccion al login cuando este en una ruta vacia
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  //a esto se le llama carga perezosa, es para que cuando el usuario ingrese no cargue todos los componentes ni modulos,
  //si no que mientras va navegando va descargando los modulos correspondientes
  //Con esto podemos entrar a los recursos y al webPack y ver que cuando iniciamos la aplicacion
  //no se nos descarga todos los modulos, podemos observar que solo cuando ingresamos se descarga el modulo de dashboard por la sgte instruccion
  {path: 'dashboard',loadChildren:() => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
