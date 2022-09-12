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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseControlService {

  constructor(private http: HttpClient) { 
  
  }

  getLightState(lightState : LightState){
    return this.http.post(`${environment.apiUrl}/home/get_light_state`, lightState);

  }

  changeLightState(controlLight : ControlLight){
    return this.http.post(`${environment.apiUrl}/home/change_light_state`, controlLight);
  }

  getDoorState(doorState : DoorState){
    return this.http.post(`${environment.apiUrl}/home/get_door_state`, doorState);
  }

  getGardenPhoto() : Observable<Blob>{
    return this.http.get(`${environment.apiUrl}/home/take_photo`, { responseType: 'blob' });
  }

}
