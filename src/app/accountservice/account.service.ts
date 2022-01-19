import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from '../authservice/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient, private auth:AuthService) { }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}accounts/login`,credentials).subscribe((res:any)=>{
      sessionStorage.setItem('token', res['token'])
      this.auth.authentication(true)
      alert(`Login successful`)
    },error=>{
      alert('There was a problem logging you in, please check your credentials and try again.')
      console.log(error)
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}accounts/register`,credentials).subscribe(response=>{
      alert(`Congratulations ${credentials.get('username')}, your account was successfully created.`)
    },error => {
      alert("Im sorry, there was a problem created the account.")
      console.log(error)
    })
  }

  logout(){
    sessionStorage.removeItem('token')
    this.auth.authentication(false)
  }
}
