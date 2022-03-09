import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  msg = localStorage.getItem("loginUserName")

  ngOnInit(): void {

  }
  sent() {
    window.alert("message sended")
  }
  formData = new FormGroup({
    from: new FormControl("", [Validators.required]),
    recipient: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  })
  get from(){
    return this.formData.get("from")
  }
  get recipient(){
    return this.formData.get("recipient")
  }
  get message(){
    return this.formData.get("message")
  }
  onsend(){
    return this.formData.value
    // console.log(this.formData.value);
    
  }
  inbox(){
    console.log(this.formData.value);
    document.getElementById("data").innerHTML=`from:${this.formData.value.from} <br> message: ${this.formData.value.message}` 
  }

}
  

// value=localStorage.getItem("loginUserName")
// sent(){
//   alert("message sent")
// }
//   constructor() { }


//   ngOnInit(): void {
//   }

// inputData()
// {
//   let toData=document.getElementById("From")
// }
// inbox(){
//   document.getElementById("data")=this.formData.value
// }

