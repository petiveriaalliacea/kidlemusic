import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getMessage(): Promise<any[]>

    {

        return new Promise((resolve, reject) => {

            this.http.get('http://localhost:44364/api/values/getMessage').subscribe((response: any) => {

                console.log(response);

            }, reject);

        });

    }

}
