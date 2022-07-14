import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewfriendsService {

  constructor(private http:HttpClient) { }

  viewfriends=()=> {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
}
