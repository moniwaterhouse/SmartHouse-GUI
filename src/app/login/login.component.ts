import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';
import { Router } from '@angular/router';
import { LoginInfo } from '../_interfaces/user';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   // Inputs
   username !: string;
   password !: string;
 
   // Validaciones
   missingUsername !: boolean;
   missingPassword !: boolean;
   invalidPassword!: boolean;
   error !: boolean;
   hide = true;
 
   user !: LoginInfo;
   validUser !: boolean

   logInResponse !: any;

  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService, private route : Router) { }

  ngOnInit(): void {
    this.auth.setUsername("");
  }

  login(){


    this.restoreFlags();

    if(this.username == null || this.username.length < 1){
      this.missingUsername = true;
    }

    if(this.password == null || this.password.length < 1){
      this.missingPassword = true;
    }

    if(!this.missingPassword && !this.missingUsername){
      
      this.user = {username: this.username, password: this.password}

      this.auth.logIn(this.user).pipe(first())
      .subscribe(response => {
        this.logInResponse = response;
        console.log(this.user)
        if (this.logInResponse.data.valid == true){
          this.auth.setUsername(this.username);
          this.route.navigate(['/lights']);
        }
        else{
          this.invalidPassword = true;
        }
      })

      
    }
  }

  restoreFlags(){
    this.missingPassword = false;
    this.missingUsername = false;
    this.invalidPassword = false;
  }

}
