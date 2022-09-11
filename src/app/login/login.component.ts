import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthGuardService) { }

  ngOnInit(): void {
  }

}
