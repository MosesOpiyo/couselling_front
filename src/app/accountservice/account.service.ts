import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';
import { AuthService } from '../authservice/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient, private auth:AuthService, private snackbar:MatSnackBar, private route:Router) { }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}accounts/login`,credentials).subscribe((res:any)=>{
      sessionStorage.setItem('token', res['token'])
      this.auth.authentication(true)
      this.snackbar.open(`Welcome back ${credentials.get('username')}`,"Dismiss")
    },error=>{
      this.snackbar.open(`There was a problem logging you in, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}accounts/register`,credentials).subscribe(response=>{
      this.snackbar.open(`Congratulations ${credentials.get('username')}, your account was successfully created`,"Thank you")
      this.route.navigate(['login'])
    },error => {
      this.snackbar.open(`There was a problem creating your account, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }
  counselor_login(credentials:any){
    this.http.post(`${environment.BASE_URL}accounts/counsellor_login`,credentials).subscribe((res:any)=>{
      sessionStorage.setItem('token', res['token'])
      this.auth.authentication(true)
      this.snackbar.open(`Welcome back counsellor `,"Dismiss")
      this.route.navigate(['dashboard'])
    },error=>{
      this.snackbar.open(`There was a problem logging you in, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }
  counsellor_register(credentials:any){
    this.http.post(`${environment.BASE_URL}accounts/counsellor_registration`,credentials).subscribe((response:any)=>{
      this.snackbar.open(`Congratulations ${credentials.get('username')}, your counsellor account was successfully created`,"Thank you")
      this.route.navigate(['counsellor_login'])
    },error => {
      this.snackbar.open(`There was a problem creating your account, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }
  counsellor_details(credentials:any){
    this.http.post(`${environment.BASE_URL}counsultion/counsellor_details`,credentials).subscribe(response=>{
      this.snackbar.open(`Additional details for ${credentials.get('first_name')}, have been successfully added`)
    },error =>{
      this.snackbar.open(`There was a problem creating your account, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }
counsellor_profile(){
  let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
  })
  return this.http.get(`${environment.BASE_URL}counsultion/counsellor_profile`,{'headers':headers})
}
  logout(){
    sessionStorage.removeItem('token')
    this.auth.authentication(false)
  }
}
