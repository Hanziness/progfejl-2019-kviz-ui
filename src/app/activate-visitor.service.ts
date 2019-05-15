import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ServiceUserService } from './service-user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateVisitorService implements CanActivate {

  constructor(private router : Router, private userService : ServiceUserService) { 
  }

  canActivate() : boolean {
    let isLoggedOut = !this.userService.isLoggedIn();
    console.debug("[ACTIVATE] User is logged out? " + isLoggedOut);
    if (!isLoggedOut) {
      this.router.navigate(['']);
    }
    return isLoggedOut;
  }
}
