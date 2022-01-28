import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';
import { AuthService } from '../authservice/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient, private auth:AuthService, private snackbar:MatSnackBar) { }

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
    },error => {
      this.snackbar.open(`There was a problem creating your account, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }

  logout(){
    sessionStorage.removeItem('token')
    this.auth.authentication(false)
  }
}
