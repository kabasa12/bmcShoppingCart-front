import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SignUp,Login } from 'src/app/models/Signup';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'bs-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  signupUsers: SignUp[] = [];
  errorMsg: string = '';

  signupObj: SignUp = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  loginObj: Login = {
    email: '',
    password: '',
  };

  constructor(
    private auth: LoginService,
    private router: Router) { 
  };

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData)
      this.signupUsers = JSON.parse(localData);
  };

  onSignUp() {
    const isDuplicate = this.signupUsers.find(u => u.email === this.signupObj.email);
    if (isDuplicate) {
      this.errorMsg = 'User Already Exists';
    }
    else {
      if (!this.signupObj.password || !this.signupObj.confirmPassword || !this.signupObj.email) {
        this.errorMsg = 'Please Fill In All The Fields';
      }
      else {
        if (this.signupObj.password === this.signupObj.confirmPassword) {
          const patern = new RegExp('(?=.*[A-Z])(?=.{8,})')
          if (this.signupObj.password.match(patern)) {
            this.signupUsers.push(this.signupObj);
            localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
          } else {
            this.errorMsg = 'Password not Stronge';
          }
        } else {
          this.errorMsg = 'Confirm Password Must Match The Password';
        };
      };
    };
    this.resetForm();
  };

  resetForm() {
    this.signupObj = {
      email: '',
      password: '',
      confirmPassword: ''
    };
  };

  onCheckboxChange() {
    this.errorMsg = '';
  };

  onLogin() {
    const isUserExist = this.signupUsers.find(u => u.email === this.loginObj.email
      && u.password === this.loginObj.password);
    
    if (isUserExist) {
      this.auth.onLogin();
      localStorage.setItem('currentUser', JSON.stringify(this.loginObj));
      this.router.navigate(['/products'])
    }
    else
    this.errorMsg = 'Wrong Email Or Password';
  };

}
