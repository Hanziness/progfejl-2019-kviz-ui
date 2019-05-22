import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  username : string;
  password : string;

  // login control
  loginProgress : boolean = false;
  loginFailed : boolean = false;

  constructor(private userService : ServiceUserService, private router : Router) {
  }

  ngOnInit() {
  }

  sendLogin() {
    this.loginProgress = true;
    this.loginFailed = false;
    this.userService.justRegistered = false;
    this.userService.login(this.username, this.password).subscribe((data: any) => {
      console.debug(data);
      this.navigateToQuiz();
      //this.loginProgress = false;
    }, (error : any) => {
      this.loginProgress = false;
      this.loginFailed = true;
      console.error(error);
    });
    // this.userService.login(this.username, this.password);
  }

  navigateToQuiz() {
    this.router.navigate(['/quiz'])
  }

}
