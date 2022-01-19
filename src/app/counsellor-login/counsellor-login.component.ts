import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/account.service';

@Component({
  selector: 'app-counsellor-login',
  templateUrl: './counsellor-login.component.html',
  styleUrls: ['./counsellor-login.component.css']
})
export class CounsellorLoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  email: any;
  password: any;
 

  loginCounsellor(){
    let form = new FormData();
    form.append('username',this.email),
    form.append('password',this.password),
    this.accountService.counselor_login(form)
  }


  ngOnInit(): void {
  }

}
