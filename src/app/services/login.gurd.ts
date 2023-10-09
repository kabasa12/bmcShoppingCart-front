import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({providedIn: 'root'})
export class LoginGuard {
  
  constructor(private auth: LoginService) { }
  canActivate(next:ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true
    if (this.auth.isLoggedIn()) {
        return true;
      } else {
        console.log('Not authorized')
        return false;
      }
  }
};