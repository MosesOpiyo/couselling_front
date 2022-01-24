import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/account.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
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
