import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authguard:ServiceService){}  
  canActivate(){

    if (this.authguard.data()){
      window.alert("u can nav to dashbord")
      return true;
    }else{
     window.alert("u not nav to dashboard")
      return false
    }

   
  }
  
}
