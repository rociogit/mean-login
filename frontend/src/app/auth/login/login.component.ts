import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../user.service';
import { UserI } from '../../models/user';
import Swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


 
  
  constructor(private authService: AuthService, private router: Router, private userService:UserService) { }
   
 
    
  ngOnInit() {
  }

  onLogin(form): void {
    
    this.authService.login(form.value).subscribe(res => {
      
      if (res.dataUser.rol=="admin"){
        this.router.navigateByUrl('/auth/menu-admin'); 
        this.userService.signIn(true);
        
      }
      
      else{
        if (res.dataUser.rol=="asistente")
        this.router.navigateByUrl('/auth/menu-asist');
        this.userService.signIn(true);
      }
      
      
    },
    error => {
      Swal.fire ('¡Error!', 'Usuario Invalido');

    });
    
    
  }
   
}

