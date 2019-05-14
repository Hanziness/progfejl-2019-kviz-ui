import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(private userService : ServiceUserService) { }

  ngOnInit() {
  }

  sendLogin() {
    this.userService.login(this.username, this.password).subscribe((data: any) => {
      console.debug(data);
    });
  }

}
