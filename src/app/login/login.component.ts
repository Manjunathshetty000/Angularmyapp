import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) { }
  onSubmit(form:NgForm){ 
    localStorage.setItem("loginUserName",form.value.uename)
    localStorage.setItem("loginPassword",form.value.upass)
    let user=(localStorage.getItem("UserName"))
    let pass=(localStorage.getItem("Password"))
    let luser= (localStorage.getItem("loginUserName"))
   let lpass= (localStorage.getItem("loginPassword"))
    if(user===luser && pass===lpass ){
this.router.navigate(['user'])

    console.log("happy"); 
    
  }else{
    
    console.log("unhappy");
    
  }
  }



  ngOnInit(): void {
  }

}
