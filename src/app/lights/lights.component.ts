import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ControlLight, LightState } from '../_interfaces/house-state';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {

  room !: string;
  lightState !: any;
  newLightState !: any;
  roomToCheck !: LightState;
  roomToChange !: ControlLight;
  groupLightState !: boolean;
  toggleLabel !: string;


  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService, private route : Router) { }

  ngOnInit(): void {
    this.toggleLabel = "Turn on all lights!"
  }

  lightLivingRoom(){
    this.room = "living-room";
    console.log(this.room);
    this.controlLights();
  }

  lightDinningRoom(){
    this.room = "dinning-room";
    console.log(this.room);
    this.controlLights();

  }

  lightKitchen(){
    this.room = "kitchen";
    console.log(this.room);
    this.controlLights();

  }

  lightBedroom1(){
    this.room = "bedroom1";
    console.log(this.room);
    this.controlLights();

  }

  lightBedroom2(){
    this.room = "bedroom2";
    console.log(this.room);
    this.controlLights();

  }


  controlLights(){
    this.roomToCheck ={room: this.room};
    this.houseControlSrv.getLightState(this.roomToCheck).pipe(first()).subscribe(response => { this.lightState = response; 
                                                                                               if (this.lightState.data.state == 0){
                                                                                                   this.newLightState = 1;
                                                                                               }
                                                                                               else{
                                                                                                 this.newLightState= 0;
                                                                                               }
                                                                                               this.roomToChange = {room: this.room, state: this.newLightState};
                                                                                     
                                                                                               this.houseControlSrv.changeLightState(this.roomToChange).pipe(first()).subscribe();
                                                                                               ;});


  }

  controlGroupLights(){
    if (this.groupLightState == false){
      this.lightsOff();
      this.toggleLabel = "Turn on all lights!"
    }
    else{
      this.lightsOn();
      this.toggleLabel = "Turn off all lights!"
    }

    console.log(this.groupLightState);
  }

  lightsOn(){
  
    this.room = "living-room";
    this.turnOnLight();

    this.room = "dinning-room";
    this.turnOnLight();

    this.room = "kitchen";
    this.turnOnLight();

    this.room = "bedroom1";
    this.turnOnLight();

    this.room = "bedroom2";
    this.turnOnLight();

  }

  lightsOff(){
    this.room = "living-room";
    this.turnOffLight();

    this.room = "dinning-room";
    this.turnOffLight();

    this.room = "kitchen";
    this.turnOffLight();

    this.room = "bedroom1";
    this.turnOffLight();

    this.room = "bedroom2";
    this.turnOffLight();
  }

  turnOnLight(){
    this.roomToChange = {room: this.room, state: 1};
    this.houseControlSrv.changeLightState(this.roomToChange).pipe(first()).subscribe();
  }

  turnOffLight(){
    this.roomToChange = {room: this.room, state: 0};
    this.houseControlSrv.changeLightState(this.roomToChange).pipe(first()).subscribe();
  }


}
