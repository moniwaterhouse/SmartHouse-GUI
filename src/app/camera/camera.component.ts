import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor(private auth : AuthGuardService) { }

  ngOnInit(): void {
  }

}
