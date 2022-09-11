import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  constructor(private auth : AuthGuardService) { }

  ngOnInit(): void {
  }

}
