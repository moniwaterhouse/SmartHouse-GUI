import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  email !: string;
  emailAux : BehaviorSubject<string> = new BehaviorSubject(this.email);

  constructor() { }

  setEmail(email : string){
    this.email = email;
    this.emailAux.next(this.email);
  }
}
