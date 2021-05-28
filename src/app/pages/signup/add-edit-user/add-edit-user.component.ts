import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service'
@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private service: SharedService) { }

  @Input() user:any;
  UserId:string;
  UserName:string;
  UserEmail: string;
  UserPassword: string;

  ngOnInit(): void {
    this.UserId = this.user.userid;
    this.UserName = this.user.username;
    this.UserEmail = this.user.useremail;
    this.UserPassword = this.user.userpassword;
  }

  addUser(){
    var val = {UserId:this.UserId,
              Username: this.UserName,
              UserEmail: this.UserEmail,
              UserPassword: this.UserPassword}
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUser(){
    var val = {UserId:this.UserId,
      Username: this.UserName,
      UserEmail: this.UserEmail,
      UserPassword: this.UserPassword}
    this.service.updateUser(val).subscribe(res=>{
    alert(res.toString());
});
  }

}
