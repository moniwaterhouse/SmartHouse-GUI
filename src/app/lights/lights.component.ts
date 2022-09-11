import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {

  room !: string;
  livingRoomStatus !: number;
  dinningRoomStatus !: number;
  kitchenStatus !: number;
  bedroom1Status !: number;
  bedroom2Status !: number;

  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService, private route : Router) { }

  ngOnInit(): void {
  }

  lightLivingRoom(){
    this.room = "living-room";
    console.log(this.room);

  }

  lightDinningRoom(){
    this.room = "dinning-room";
    console.log(this.room);

  }

  lightKitchen(){
    this.room = "kitchen";
    console.log(this.room);

  }

  lightBedroom1(){
    this.room = "bedroom1";
    console.log(this.room);

  }

  lightBedroom2(){
    this.room = "bedroom2";
    console.log(this.room);

  }

}
