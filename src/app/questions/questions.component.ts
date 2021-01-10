import { Component, OnInit } from '@angular/core';
import {PsServiceService} from '../ps-service.service'
import { Router } from '@angular/router';
import { errorMonitor } from 'events';
import { AssertionError } from 'assert';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions:any=[]
  qNo:number;
 clicked: boolean;
 op1:boolean;
 op2:boolean;
 op3:boolean;
 op4:boolean;
 

 

  
  constructor(private ser:PsServiceService,private route:Router)   {}

  ngOnInit(): void {
    this.qNo=0;
    this.op1=false;
    this.op2=false;
    this.op3=false;
    this.op4=false;
    this.ser.getData().subscribe((data)=>{
      if(data==null){
       this.aterror()
      }
      if(data!=null){
        this.clicked=false
        this.questions=data
      }

    })
  }
  

  answer(value){
    this.clicked=true;
    if(value=='a'){ this.op1=true};
    if(value=='b'){ this.op2=true};
    if(value=='c'){ this.op3=true};
    if(value=='d'){ this.op4=true};
    if(value==this.questions[this.qNo].answer){
      console.warn("correct")
    }
  }

  next(){
    if(this.qNo!=9){
      this.qNo++;
    }
  
    this.op1=false;
    this.op2=false;
    this.op3=false;
    this.op4=false;
    console.warn("next");
    
  }

  previous(){
    if(this.qNo!=0){
      this.qNo=this.qNo-1;
        }
    this.op1=false;
    this.op2=false;
    this.op3=false;
    this.op4=false;
    console.warn("previous");

  }
  aterror(){
    this.route.navigate(["/error"])
  }

}
