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

@Injectable({
  providedIn: 'root'
})
export class HouseControlService {

  constructor() { }
}
