import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Inputs
  email !: string;
  password !: string;
  name !: string;
  username !: string;

  // Validaciones
  missingEmail !: boolean;
  missingPassword !: boolean;
  missingName !: boolean;
  missingUsername !: boolean;
  error !: boolean;
  hide = true;
  invalidPassword !: boolean;

  // Variables usadas con los requests
  correos : any;

  //datos !: DatosLogin;

  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService, private route : Router) { }

  ngOnInit(): void {
  }

  register(){
    this.route.navigate(['/lights']);
  }

}
