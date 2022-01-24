import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:any
  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
  }

}
