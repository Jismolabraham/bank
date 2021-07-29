import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ano = "Account Num";
  pwd = "pass";
  Amount = "Deposit Amount"
  ano1 = "Account Num";
  pwd1 = "pass";
  Amount1 = "Withdraw Amount"

  depositform = this.fb.group(
    {
      ano: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      Amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    }
  )
  withdrawform = this.fb.group({
    ano1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    Amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  
  user = this.ds.currentuser;
  constructor(private ds: DataService, private fb: FormBuilder) { }

 
 
  


  ngOnInit(): void {
  }
  Deposit() {
    if (this.depositform.valid) {
      var ano = this.depositform.value.ano;
      var pwd = this.depositform.value.pwd
      var Amount = this.depositform.value.Amount
      var result = this.ds.deposit(ano, pwd, Amount)
      if (result) {
        alert(Amount + "credited succesfully and new balance is" + result)
      }
    }
  }
  Withdraw() {
    if (this.withdrawform.valid) {
      var ano1 = this.withdrawform.value.ano1
      var pwd1 = this.withdrawform.value.pwd1
      var amount1 = this.withdrawform.value.Amount1
      var result = this.ds.withdraw(ano1, pwd1, amount1)
      console.log(result);
      
      if (result) {
        alert(amount1 + "debited succesfully and new balance is" + result)
      }
    }
  }

}
