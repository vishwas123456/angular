import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
this.userService.reteriveUser().subscribe((res)=>{
  console.log(res)
})
  }

logOut(){
  localStorage.removeItem('key')
this.route.navigateByUrl('/login')

}

}
