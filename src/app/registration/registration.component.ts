import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router) { }
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.upass);
    localStorage.setItem("UserName", form.value.uename)
    localStorage.setItem("Password", form.value.upass)
    let user1 = localStorage.getItem("UserName")
    let pass1 = localStorage.getItem("Password")
    if (user1 && pass1) {
      this.router.navigate(['login'])
      window.alert("Navigated to LoginForm")
    }
  }
  ngOnInit(): void {
  }

}
