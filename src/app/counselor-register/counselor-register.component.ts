import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/account.service';

@Component({
  selector: 'app-counselor-register',
  templateUrl: './counselor-register.component.html',
  styleUrls: ['./counselor-register.component.css']
})
export class CounselorRegisterComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  email:any; 
  username:any; 
  password:any;

  

  signUp(){
    let form = new FormData()
    form.append('email',this.email)
    form.append('username',this.username)
    form.append('password',this.password)
    this.accountService.counsellor_register(form)
  }


  ngOnInit(): void {
  }

}
