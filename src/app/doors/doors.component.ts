import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';
import { DoorState } from '../_interfaces/house-state';
import { first } from 'rxjs';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit{

  private unsub = new Subject<void>();

  frontDoor !: number;
  backDoor !: number;
  bedroom1Door !: number;
  bedroom2Door !: number;

  frontDoorLabel !: string;
  backDoorLabel !: string;
  bedroom1Label !: string;
  bedroom2Label !: string;


  door !: DoorState;
  doorState !: any;

  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService) {
    
  }

  ngOnInit(): void {
    this.checkStates()
    setInterval(() => {
      window.location.reload();
    }, 2000);
  }


  checkStates(){
    this.getDoorState("1");
    this.getDoorState("2");
    this.getDoorState("3");
    this.getDoorState("4");
  }

  getDoorState(roomDoor : string){
    this.door = {door : roomDoor}
    this.houseControlSrv.getDoorState(this.door).pipe(first())
    .subscribe(response => { 
      this.doorState = response;
      if (roomDoor == "1"){
        this.frontDoor = this.doorState.data.state;
        if(this.frontDoor == 1){
          this.frontDoorLabel = "Opened";
        }
        else{
          this.frontDoorLabel = "Closed"
        }
      }
      else if(roomDoor == "2"){
        this.backDoor = this.doorState.data.state;
        if(this.backDoor == 1){
          this.backDoorLabel = "Opened";
        }
        else{
          this.backDoorLabel = "Closed"
        }
      }
      else if(roomDoor == "3"){
        this.bedroom1Door = this.doorState.data.state;
        if(this.bedroom1Door == 1){
          this.bedroom1Label = "Opened";
        }
        else{
          
            this.bedroom1Label = "Closed"
          }
        }
      
      else{
        this.bedroom2Door = this.doorState.data.state;
        if(this.bedroom2Door == 1){
          this.bedroom2Label = "Opened";
        }
        else{
          this.bedroom2Label = "Closed"
        }
      }
      
      ;});

  }


}
