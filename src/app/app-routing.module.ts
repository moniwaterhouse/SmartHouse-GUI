import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightsComponent } from './lights/lights.component';
import { DoorsComponent } from './doors/doors.component';
import { CameraComponent } from './camera/camera.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'lights', component: LightsComponent},
  {path: 'doors', component: DoorsComponent},
  {path: 'camera', component: CameraComponent},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
