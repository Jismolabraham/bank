import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Welcome to SBL Bank"
  acno="Account number please"
  ano=""
  pwd=""
  users :any= {
    1000: {accno:1000,username:"bala", password:"bala",balance:50000},
    1001: {accno:1002,username:"Kiran", password:"kiran",balance:40000},
    1002: {accno:1003,username:"Meera", password:"meera",balance:30000},
    1003: {accno:1004,username:"Hari", password:"hari",balance:20000}
  }

  constructor() { }

  ngOnInit(): void {
  }
  AccNum(event:any)
  {
    this.ano=event.target.value

  }
  Accpwd(event:any)
  {
    this.pwd=event.target.value

  }
login()
{
  var no=this.ano;
  var pass=this.pwd;
  var accdetails=this.users;
  if(no in this.users)
  {
    if(pass==accdetails[no]["password"])
    {
      alert("login succes")
    }
    else
    {
      alert("invalid password")
    }
  }
  else
  {
    alert("enter a valid account number")
  }
  
}
}
