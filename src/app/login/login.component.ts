import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   // Inputs
   email !: string;
   password !: string;
 
   // Validaciones
   missingEmail !: boolean;
   missingPassword !: boolean;
   invalidPassword!: boolean;
   error !: boolean;
   hide = true;
 
   // Variables usadas con los requests
   correos : any;
   //datos !: DatosLogin;

  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService, private route : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.route.navigate(['/lights']);
  }

}
