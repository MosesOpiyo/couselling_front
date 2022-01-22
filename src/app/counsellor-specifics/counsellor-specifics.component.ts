import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from '../accountservice/account.service';

@Component({
  selector: 'app-counsellor-specifics',
  templateUrl: './counsellor-specifics.component.html',
  styleUrls: ['./counsellor-specifics.component.css']
})
export class CounsellorSpecificsComponent implements OnInit {

  constructor(private accountService:AccountService,private snackbar:MatSnackBar) { }
  first_name:any; 
  last_name:any; 
  work_experience:any;
  qualities:any;

  
  CounsellorDetails(){
    let form = new FormData()
    form.append('first_name',this.first_name)
    form.append('last_name',this.last_name)
    form.append('work_experience',this.work_experience)
    form.append('qualities',this.qualities)
    this.accountService.counsellor_details(form)
  }

  ngOnInit(): void {
  }

}
