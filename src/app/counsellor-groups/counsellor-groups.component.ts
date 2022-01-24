import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/account.service';

@Component({
  selector: 'app-counsellor-groups',
  templateUrl: './counsellor-groups.component.html',
  styleUrls: ['./counsellor-groups.component.css']
})
export class CounsellorGroupsComponent implements OnInit {

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
