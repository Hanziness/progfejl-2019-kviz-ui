import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;

  constructor(private userService : ServiceUserService, private router : Router) {

  }

  ngOnInit() {
  }

  navbarLogout() {
    this.userService.logout().subscribe((data) => {
      console.debug("Logged out successfully");
      this.router.navigate(['/index']);
    });
  }
}
