import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  loggedInUserName : string;

  constructor(private httpClient : HttpClient) { }

  public isLoggedIn() : boolean {
    if (this.loggedInUserName) {
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
    }, (error) => {
      this.loggedInUserName = undefined;
      console.error("Failed to log out");
    });

    return req;
  }
}
