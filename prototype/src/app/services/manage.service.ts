import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  apiURL = "http://192.168.1.7:3000/api/"; 

  constructor(private http:HttpClient) { }
}
