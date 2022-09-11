/**
 * This service contains the requests to communicate with the server.
 * @author Mónica Waterhouse
 * @version version 1.0
 * 
 */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginInfo, RegisterInfo } from '../_interfaces/user';
import { ControlLight, LightState,  DoorState} from '../_interfaces/house-state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseControlService {

  constructor(private http: HttpClient) { 
  
  }

  getLightStatus(lightState : LightState){
    return this.http.post(`${environment.apiUrl}/get_light_state`, lightState);

  }

  changeLightState(controlLight : ControlLight){
    return this.http.post(`${environment.apiUrl}/change_light_state`, controlLight);
  }

  getDoorState(doorState : DoorState){
    return this.http.post(`${environment.apiUrl}/get_door_state`, doorState);
  }

  getGardenPhoto(){
    return this.http.get(`${environment.apiUrl}/take_photo`);
  }

  loginUser(loginInfo : LoginInfo){
    return this.http.post(`${environment.apiUrl}/login`, loginInfo);
  }

  registerUser(registerInfo : RegisterInfo){
    return this.http.post(`${environment.apiUrl}/sign_up`, registerInfo);

  }
}
