import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  loggedInUserName : string;
  hasAdminRights : boolean;

  constructor(private httpClient : HttpClient) { 
    let u = localStorage.getItem('user');

    if (u) {
      this.loggedInUserName = u;
      this.hasAdminRights = true; // TODO
    }
  }

  public isLoggedIn() : boolean {
    if (this.loggedInUserName) {
      return true;
    }
    return false;
  }

  public isAdmin() : boolean {
    if (this.hasAdminRights) {
      return true;
    }
    return false;
  }

  public login(username: string, password: string) : Observable<any> {
    let req = this.httpClient.post("http://localhost:5000/login", {
      username: username,
      password: password
    }, { responseType: 'text', withCredentials: true }).pipe(share());

    req.subscribe((data) => {
      // localStorage.setItem("user", username);
      console.debug(data);
      this.loggedInUserName = username;

      // TODO Get if user is admin!
      console.debug("[LOGIN] Admin permissions are not yet checked!");
      this.hasAdminRights = true;
      localStorage.setItem('user', username);
    }, (error) => {
      console.error("Login failed:")
      console.error(error);
    });

    return req;
  }

  public register(username: string, password: string) : Observable<any> {
    let req = this.httpClient.post("http://localhost:5000/register", {
      username: username,
      password: password
    }, { responseType: 'text' }).pipe(share());

    

    req.subscribe((data) => {
      // localStorage.setItem("user", username);
      console.debug(data);
      this.loggedInUserName = username;
      
    }, (error) => {
      console.error("Registration failed:")
      console.error(error);
    });

    return req;
  }

  public logout() : Observable<any> {
    let req = this.httpClient.post("http://localhost:5000/logout", { }, { 
      responseType: 'text',
      withCredentials: true,
      headers : new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })}).pipe(share());

    req.subscribe((data) => {
      this.loggedInUserName = undefined;
      this.hasAdminRights = false;
      localStorage.removeItem('user');
    }, (error) => {
      this.loggedInUserName = undefined;
      this.hasAdminRights = false;
      localStorage.removeItem('user');
      console.error("Failed to log out");
    });

    return req;
  }
}
