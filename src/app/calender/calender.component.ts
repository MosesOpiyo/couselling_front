import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  providers: [DatePipe]
})
export class CalenderComponent implements OnInit {
 
  currentDate = new Date();
  localDate : string = new Date().toLocaleString();
  constructor(private date:DatePipe) {
   
   }

  ngOnInit(): void {
    
  }

}

