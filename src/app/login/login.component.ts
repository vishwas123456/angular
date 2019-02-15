import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: any

  constructor(private userService: UserService, private route: Router) {
    this.user={email :'', password: ''}
  }

  ngOnInit() {
  }

  login(){

    this.userService.onLogin(this.user).subscribe((res)=>{

      console.log(res.status)

      var token= res.token;
      if(res.status == true){
        localStorage.setItem('key', token )
        this.route.navigateByUrl('/dashboard')
      }
      else{
        alert('please enter correct email and passwor')
      }

    })
  }

}
