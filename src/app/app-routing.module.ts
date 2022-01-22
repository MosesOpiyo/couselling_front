import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounsellorLoginComponent } from './counsellor-login/counsellor-login.component';
import { CounsellorSpecificsComponent } from './counsellor-specifics/counsellor-specifics.component';
import { CounselorRegisterComponent } from './counselor-register/counselor-register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sign_up',component:SignupComponent},
  {path:'counsellor_registration',component:CounselorRegisterComponent},
  {path:'counsellor_login',component:CounsellorLoginComponent},
  {path:'consellor_specifics',component:CounsellorSpecificsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
