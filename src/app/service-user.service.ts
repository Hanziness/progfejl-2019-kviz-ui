import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

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
    });

    req.subscribe((data) => {
      // localStorage.setItem("user", username);
      console.debug(data);
      this.loggedInUserName = username;
    });

    return req;
  }

  public register(username: string, password: string) : Observable<any> {
    let req = this.httpClient.post("http://localhost:5000/register", {
      username: username,
      password: password
    });

    req.subscribe((data) => {
      // localStorage.setItem("user", username);
      console.debug(data);
      this.loggedInUserName = username;
    });

    return req;
  }

  public logout() : Observable<any> {
    let req = this.httpClient.post("http://localhost:5000/logout", { });

    req.subscribe((data) => {
      this.loggedInUserName = undefined;
    });

    return req;
  }
}
