import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser=""
  currentacc=""
  users :any= {
    1000: {accno:1000,password:"bala", username:"bala",balance:50000,transaction:[]},
    1001: {accno:1001,password:"Kiran", username:"kiran",balance:40000,transaction:[]},
    1002: {accno:1002,password:"Meera", username:"meera",balance:30000,transaction:[]},
    1003: {accno:1003,password:"Hari", username:"hari",balance:20000,transaction:[]}
  }

  constructor() {
    // this.getdetails()
   }

  savedetails()
  {
    localStorage.setItem("users", JSON.stringify(this.users))
    if(this.currentuser)
    {
      localStorage.setItem("currentuser", JSON.stringify(this.currentuser))
    }
    if(this.currentacc)
    {
      localStorage.setItem("currentacc", JSON.stringify(this.currentacc))
    }
    
  }
getdetails()
{
  if(localStorage.getItem("users"))
  {
    this.users=JSON.parse(localStorage.getItem("users")|| '')
  }
  if(this.currentuser)
  {
    this.currentuser=JSON.parse(localStorage.getItem("currentuser")|| '')
  }
  if(this.currentacc)
  {
    this.currentacc=JSON.parse(localStorage.getItem("currentacc")|| '')
  }
}

gettransaction()
{
// return "helloxfxcgfcgd"
 return this.users[this.currentacc].transaction
}
  register(accno:any,password:any,username:any)
  {
    let accdetails=this.users;
    if(accno in accdetails)
    {
      alert("user already exist!!!Please Login")
      return false;
    }
    else
    {
      this.users[accno]={accno,password,username,balance:0,transaction:[]}
    }
    // console.log(accdetails);
    this.savedetails()
    return true;
  }


  login(no:any,pass:any)
  {
    var accdetails=this.users;
    // console.log(no);
    
    if(no in this.users)
    {
      if(pass==accdetails[no]["password"])
      {
        this.currentuser=accdetails[no]["username"]
        this.currentacc=no;

        this.savedetails()
        return true
       
      }
      else
      {
        alert("invalid password")
        return false
        
      }
    }
    else
    {
      alert("enter a valid account number")
      return false
    }
  }
  

  deposit(accno:any,pswd:any,amount:any)
  {
    let accDetails=this.users
    var amt=parseInt(amount)
    if(accno in accDetails)
    {
      if(pswd==accDetails[accno]["password"])
      {
        accDetails[accno]["balance"]+=amt
        accDetails[accno].transaction.push({
          amount:amt,
          type:"credit"
        })
        this.savedetails()
        return accDetails[accno]["balance"]
      }
      else
      {
        alert("invalid password")
        return false
      }
    }
    else
    {
      alert("invalid account number")
      return false
    }
  }

  withdraw(accno:any,pswd:any,amount:any)
  {
    let accDetails=this.users
    var amt=parseInt(amount)
    if(accno in accDetails)
    {
      if(pswd==accDetails[accno]["password"])
      {
        if(accDetails[accno]["balance"]>amt)
        {
          accDetails[accno]["balance"]-=amt
          accDetails[accno].transaction.push({
            amount:amt,
            type:"debit"
          })
          this.savedetails()
        return accDetails[accno]["balance"]
        }
        else
        {
          alert("insufficient balance")
          return false
        }
      }
      else
      {
        alert("invalid password")
        return false
      }
    }
    else
    {
      alert("invalid account number")
      return false
    }
  }
}
