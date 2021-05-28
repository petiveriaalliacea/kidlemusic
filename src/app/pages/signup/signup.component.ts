import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/services/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  name:any;
  email:any;
  pass:any;
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
    form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: ''
    }
  }

  ClickedName(event): void{
    this.name = event.target.value
  }
  ClickedEmail(event): void{
    this.email = event.target.value
  }
  ClickedPassword(event): void{
    this.pass = event.target.value
  }

  Submit(event): void{
    console.log('BBB')
    let data = {'UserEmail':this.email,'UserPassword':this.pass,'UserId':1,'UserName':this.name}
    const upload = this.http.post('http://localhost:60049/api/Users', data);
    upload.subscribe(responce =>{
      console.log(responce)
    })
  }
}
