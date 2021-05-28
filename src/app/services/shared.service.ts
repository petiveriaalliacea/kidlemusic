import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  readonly APIUrl = "http://localhost:60049/api";
  readonly PhotoUrl = "http://localhost:60049/Photos";

  constructor(private http:HttpClient) { }

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Users')
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/Users',val)
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+'/Users',val)
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'/Users/'+ val)
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Users/Photos',val)
  }


}
