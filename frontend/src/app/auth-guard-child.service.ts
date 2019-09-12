import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router'; 
import { UserService } from './user.service';
import { Routes, RouterModule } from '@angular/router';
import Swal from'sweetalert2';
@Injectable()
export class AuthGuardServiceChild implements CanActivateChild {

  constructor(private auth: UserService, private router: Router) { }

  canActivateChild(): boolean {
    if (!this.auth.isLoggedIn) {
      //this.router.navigate(['/login']); // Si es falso lo devuelve a la página login o a la que tu quieras
      Swal.fire ('¡Error!', 'No autorizado');
      this.router.navigate(['./auth/login']);
      return false;
    }
    return true;
  }


}