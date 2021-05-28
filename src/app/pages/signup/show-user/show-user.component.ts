import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any =[];

  ModalTitle: string;
  ActivateAddEditUserComp:boolean=false;
  user:any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList = data;
      console.log(this.UserList);
    });
  }

  addClick(){
     this.user ={
       UserId:0,
       UserName:""
     }
     this.ModalTitle = "Add User";
     this.ActivateAddEditUserComp=true;
  }


  editClick(item){
    this.user = item;
    this.ModalTitle ="Edit User";
    this.ActivateAddEditUserComp = true;
  }

  deleteClick(item){
    console.log(item.userid);
    if(confirm('Are you sure?')){
      this.service.deleteUser(item.userid).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditUserComp = false;
    this.refreshUserList();
  }
}
