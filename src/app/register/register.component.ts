import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ano="Account Num";
  pwd="pass";
  uname="Enter UserName"

  registerform=this.fb.group(
  {
    uname:['enter username please',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    ano:['account number plaese',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  Register()
  {
    // var acno=this.ano;
    // var pwd=this.pwd;
    // var uname=this.uname;
    // template driven
    
    if(this.registerform.valid)
    {
      var acno=this.registerform.value.ano;
      var pwd=this.registerform.value.pwd;
      var uname=this.registerform.value.uname;
      var result=this.ds.register(acno,pwd,uname)
      if(result)
      {
        alert("succes")
        this.router.navigateByUrl("")
      }
    }
    else
    {
      alert("form invalid")
    }
    // var acno=this.registerform.value.ano;
    // var pwd=this.registerform.value.pwd;
    // var uname=this.registerform.value.uname;
    // var result=this.ds.register(acno,pwd,uname)
    // if(result)
    // {
    //   alert("succes")
    //   this.router.navigateByUrl("")
    // }
    
    
  }

}
