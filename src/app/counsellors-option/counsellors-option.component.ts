import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/account.service';

@Component({
  selector: 'app-counsellors-option',
  templateUrl: './counsellors-option.component.html',
  styleUrls: ['./counsellors-option.component.css']
})
export class CounsellorsOptionComponent implements OnInit {

  user:any
  constructor(private accountservice:AccountService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
  }
}
