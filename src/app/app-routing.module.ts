import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { CounsellorGroupsComponent } from './counsellor-groups/counsellor-groups.component';
import { CounsellorLoginComponent } from './counsellor-login/counsellor-login.component';
import { CounsellorSpecificsComponent } from './counsellor-specifics/counsellor-specifics.component';
import { CounselorRegisterComponent } from './counselor-register/counselor-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sign_up',component:SignupComponent},
  {path:'counsellor_registration',component:CounselorRegisterComponent},
  {path:'counsellor_login',component:CounsellorLoginComponent},
  {path:'consellor_specifics',component:CounsellorSpecificsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'client_dashboard',component:ClientDashboardComponent},
  {path:'counsellor_groups',component:CounsellorGroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
