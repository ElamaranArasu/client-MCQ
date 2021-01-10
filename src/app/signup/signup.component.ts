import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { PsServiceService } from '../ps-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ser:PsServiceService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  signup=new FormGroup({
     mail: new FormControl('',[Validators.required,Validators.email]),
    name: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    token:new FormControl('null')
  })
  get mail(){return this.signup.get('mail')}
  get name(){return this.signup.get('name')}
  get password(){return this.signup.get('password')}

  onsignin(){ 
    console.warn(this.signup.value);
    return this.http.post(this.ser.rooturl+"/signup",this.signup.value).subscribe((data)=>{
    this.route.navigate(['/login']);
  })
  }

}
