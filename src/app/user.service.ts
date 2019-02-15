import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  path = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  onSignUp(user) {
    return this.http.post(this.path + 'register', user)
  }


  onLogin(user) {
    return this.http.post<any>(this.path + 'login', user)
  }

  reteriveUser() {
    var token = localStorage.getItem('key');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };

    return this.http.get<any>(this.path + 'current_user', httpOptions)
  }

  getToken() {
    return localStorage.getItem('key')
  }
  
  isLoggednIn() {
    return this.getToken() !== null;
  }

}
