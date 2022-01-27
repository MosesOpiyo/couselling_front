import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/forum', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'sign_up',component:SignupComponent},
  {path:'forum',component:HomepageComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact-us', component:ContactUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
