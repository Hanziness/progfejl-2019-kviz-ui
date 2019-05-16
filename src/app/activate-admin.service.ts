import { Router, CanActivate } from '@angular/router';
import { ServiceUserService } from './service-user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivateAdminService implements CanActivate {

  constructor(private router : Router, private userService : ServiceUserService) { 
  }

  canActivate() : boolean {
    let isAdmin = this.userService.isAdmin();
    console.debug("[ACTIVATE] User is admin? " + isAdmin);
    if (!isAdmin) {
      // this.router.navigate(['']);
    }
    return isAdmin;
  }
}
