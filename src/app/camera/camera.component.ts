import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { HouseControlService } from '../_services/house-control.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  gardenPhoto !: any;

  constructor(private auth : AuthGuardService, private houseControlSrv : HouseControlService) { }

  ngOnInit(): void {
  }

  takeGardenPhoto(){
    this.houseControlSrv.getGardenPhoto().pipe(first()).subscribe(response => {
      this.createImageFromBlob(response);
    }, error => {
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.gardenPhoto = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
