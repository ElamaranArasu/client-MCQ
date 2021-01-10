import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { PsServiceService } from '../ps-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ser:PsServiceService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  
  login=new FormGroup({
    userName: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  get userName(){return this.login.get('userName')}
  get password(){return this.login.get('password')}

  onSubmit(){ 
    console.warn(this.login.value);
    
    return this.http.post(this.ser.rooturl+"/login",this.login.value).subscribe((data)=>{
    this.ser.auth=data;
    localStorage.clear();
    localStorage.setItem('logintoken',JSON.stringify(data));
    this.route.navigate(['/question-home']);
  })
  }
}

