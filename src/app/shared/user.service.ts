import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class UserService {
  readonly BaseURI = 'http://localhost:21929/api'

  constructor(private fb: FormBuilder, private jwtHelper: JwtHelperService, private http: HttpClient) { }

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }


  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/Authentication/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/Authentication/Login', formData);
  }

  isAuthenticated(): boolean{
    var token = localStorage.getItem('token');
    console.log(token);
    return token && !this.jwtHelper.isTokenExpired(token)
  }

}



  // getMessage(): Promise<any[]>

  //   {

  //       return new Promise((resolve, reject) => {

  //           this._httpClient.get('http://localhost:44364/getMessage').subscribe((response: any) => {

  //               console.log(response);

  //           }, reject);

  //       });

  //   }



