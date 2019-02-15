import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: any={name:'', email: '', password:''}
  
constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

signUp(){
  this.userService.onSignUp(this.user).subscribe((res)=>{
    console.log(res)
    this.route.navigateByUrl("/login")
  })
}
}
