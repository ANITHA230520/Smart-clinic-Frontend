import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/_Services/admin.service';



@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  signupUsers:any[] =[];
  signupObj:any ={
    userName: '',
    email:'',
    password:''
  };
  loginObj:any={
    userName: '',
    password:''

  };

  constructor(private router: Router){}

  ngOnInit(): void {
   
  }

  onSignUp(){
    

  }
  onLogin(){
    alert('Login Successfully')
     if(this.loginObj.userName == 'Arul' && this.loginObj.password =='78999'){
      this.router.navigateByUrl('addashboard')

     }else if(this.loginObj.userName == 'Anitha' && this.loginObj.password =='ani78'){
      this.router.navigateByUrl('docdashboard')
     }

  }
}


