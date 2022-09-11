import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth : AuthGuardService) { }

  ngOnInit(): void {
  }

}
