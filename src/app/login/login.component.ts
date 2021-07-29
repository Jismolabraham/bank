import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Welcome to SBL Bank"
  acno = "Account number please"
  ano = "Account number please"
  pwd = ""
  loginform = this.fb.group(
    {
      ano: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

    }
  )

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // AccNum(event:any)
  // {
  //   this.ano=event.target.value

  // }
  // Accpwd(event:any)
  // {
  //   this.pwd=event.target.value

  // }

  login() {
    if (this.loginform.valid) {
      // var no=this.ano;
      // var pass=this.pwd;
      var no = this.loginform.value.ano;
      var pass = this.loginform.value.pwd;

      var result = this.ds.login(no, pass);
      if (result) {
        alert("login succes")
        this.router.navigateByUrl("dashboard")
      }
    }

  }



  // login()
  // {
  //   var no=this.ano;
  //   var pass=this.pwd;
  //   var accdetails=this.users;
  //   if(no in this.users)
  //   {
  //     if(pass==accdetails[no]["password"])
  //     {
  //       alert("login succes")
  //     }
  //     else
  //     {
  //       alert("invalid password")
  //     }
  //   }
  //   else
  //   {
  //     alert("enter a valid account number")
  //   }

  // }
}
