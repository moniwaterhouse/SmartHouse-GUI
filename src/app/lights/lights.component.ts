import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {

  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService) { }

  ngOnInit(): void {
  }

}
