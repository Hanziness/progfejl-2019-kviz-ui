import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ServiceUserService } from './service-user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateUserService implements CanActivate {

  constructor(private router : Router, private userService : ServiceUserService) { 
  }

  canActivate() : boolean {
    let isLoggedIn = this.userService.isLoggedIn();
    console.debug("[ACTIVATE] User is logged in? " + isLoggedIn);
    if (!isLoggedIn) {
      // this.router.navigate(['']);
    }
    return isLoggedIn;
  }
}
