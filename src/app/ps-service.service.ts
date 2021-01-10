import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PsServiceService {


//------properties
readonly rooturl="http://localhost:8081";
auth:any
qset:number


  constructor(private http:HttpClient) { }



  getData(){
    console.warn(this.auth)
    return this.http.post(this.rooturl+'/question/'+this.qset,this.auth);
  }
  postlogin( ){
   // console.warn( )
   // return this.http.post(this.rooturl+'/login',login).subscribe((data)=>{
     // console.warn(data);
   // })
  }
  }