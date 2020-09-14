import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   apiURL = "http://192.168.1.7:3000/api/"; 
  constructor(private http:HttpClient) { }
 

  login(data){
    return this.http.post(this.apiURL+'user/login',data);
  }

  saveUser(data){
    return this.http.post(this.apiURL+'user/signup',data);
  }

 
}
