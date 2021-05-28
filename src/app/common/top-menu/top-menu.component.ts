import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(private router: Router, private as: UserService) { }

  ngOnInit(): void {
  }

  public get isLoggedIn(): boolean{
    return this.as.isAuthenticated()
  }

  onLogout(){
    console.log("Goes")
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
