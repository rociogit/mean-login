import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';
import { AuthGuardServiceChild} from '../auth-guard-child.service';

//importar los componentes login y register--- las 2 pantallas
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { MenuAdminComponent } from './menu-admin/menuadmin.component';
import{MenuAsistComponent} from './menu-asist/menu-asist.component';
import {CrearOficinasComponent} from './menu-admin/crear-oficinas/crear-oficinas.component';
import {CrearCitasComponent} from './menu-asist/crear-citas/crear-citas.component';
import {ReporteComponent} from './menu-asist/reporte/reporte.component';


const routes: Routes = [
{path: 'register', component: RegisterComponent},


{path: 'login', component: LoginComponent},
{path: 'menu-admin', component: MenuAdminComponent, canActivate: [AuthGuardService],canActivateChild: [AuthGuardServiceChild] },
{path: 'menu-asist', component: MenuAsistComponent, canActivate: [AuthGuardService]},
//{path: 'reporte', component: ReporteComponent}

{path: 'crear-oficinas', component: CrearOficinasComponent},
{path: 'crear-citas', component: CrearCitasComponent},
{path: 'reporte', component: ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }