import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor() { }

  isLoggedIn() : boolean {
    return false;
  }
}
