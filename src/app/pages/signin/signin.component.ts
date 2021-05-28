import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email:any;
  pass:any;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  getMessage(): any{
    this.userService.getMessage();
  }


  ClickedEmail(event): void{
    this.email = event.target.value
  }
  ClickedPasswrod(event): void{
    this.pass = event.target.value
  }
  Submit(event): void{
    console.log('AAA')
    let data = {'UserEmail':this.email,'UserPassword':this.pass,'UserId':1,'UserName':'Aisara'}
    const upload = this.http.post('http://localhost:60049/login', data);
    upload.subscribe(responce =>{
      // if (responce =='OK'){
      //   redirect to profile
      // }
      console.log(responce)
      //localStorage.setItem('logged_in','false')
    })
  }


}
