import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data(){
    let user=(localStorage.getItem("UserName"))
    let pass=(localStorage.getItem("Password"))
    let luser= (localStorage.getItem("loginUserName"))
   let lpass= (localStorage.getItem("loginPassword"))
    if(user===luser && pass===lpass && user!=null && pass!=null && luser!=null && lpass!=null){
     return true
    }else{
      return false
    }

  }

  constructor() { }
}
