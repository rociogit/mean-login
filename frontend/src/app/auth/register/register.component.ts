import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';
import Swal from'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit() {
  }

  onRegister(form): void {
    this.authService.register(form.value).subscribe(res => {
      Swal.fire ('Muy bien', 'Registro Exitoso');
    },
    error => {
      Swal.fire ('¡Fail!', 'Los Registros no fueron ingresados');
    }
    );
  }

}

