import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsServiceService } from '../ps-service.service';

@Component({
  selector: 'app-question-home',
  templateUrl: './question-home.component.html',
  styleUrls: ['./question-home.component.css']
})
export class QuestionHomeComponent implements OnInit {

  constructor(private route:Router,private pser:PsServiceService) { }

  ngOnInit(): void {
  }
  questionSet(set){
    this.pser.qset=set;
    this.route.navigate(['/questions'])
       
  }

}
