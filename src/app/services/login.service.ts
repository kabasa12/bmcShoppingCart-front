import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    OnChangeLogin: EventEmitter<any> = new EventEmitter<any>();
    OnChangeLogout: EventEmitter<any> = new EventEmitter<any>();

    loggedIn: boolean = false;
    constructor() { };

    isLoggedIn() {
        return this.loggedIn;
    };

    onLogin() {
        this.loggedIn = true;
        this.OnChangeLogin.emit();
    };

    onLogout() {
        this.loggedIn = false;
        this.OnChangeLogout.emit();
    }

}