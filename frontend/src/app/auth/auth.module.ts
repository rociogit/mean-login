import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthRoutingModule} from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from '../services/auth.service';
import { MenuAdminComponent } from './menu-admin/menuadmin.component';
import { MenuAsistComponent } from './menu-asist/menu-asist.component';
import { CrearOficinasComponent } from './menu-admin/crear-oficinas/crear-oficinas.component';
import { CrearCitasComponent } from './menu-asist/crear-citas/crear-citas.component';
import { ReporteComponent } from './menu-asist/reporte/reporte.component';
//import { ReporteComponent } from './menu-asist/reporte/reporte.component';








@NgModule({
  declarations: [RegisterComponent, LoginComponent, MenuAdminComponent, MenuAsistComponent, CrearOficinasComponent, CrearCitasComponent, ReporteComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule

  ], 
  providers:[AuthService]
})
export class AuthModule { }
