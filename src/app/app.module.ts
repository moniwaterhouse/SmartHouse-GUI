import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightsComponent } from './lights/lights.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoorsComponent } from './doors/doors.component';
import { CameraComponent } from './camera/camera.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LightsComponent,
    NavbarComponent,
    DoorsComponent,
    CameraComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
