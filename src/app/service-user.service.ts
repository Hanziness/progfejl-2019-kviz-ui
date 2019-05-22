import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

export interface LeaderboardEntry {
  username : string,
  score : number
}

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  loggedInUserName: string;
  hasAdminRights: boolean;
  userPoints: number;
  justRegistered : boolean = false;

  constructor(private httpClient: HttpClient) { 
    let u = localStorage.getItem('user');

    if (u) {
      this.loggedInUserName = u;
      // this.hasAdminRights = true; // TODO
      this.hasAdminRights = localStorage.getItem('admin') === '1';
      this.userPoints = Number.parseInt(localStorage.getItem('points'));
    }
  }

  public isLoggedIn(): boolean {
    if (this.loggedInUserName) {
      return true;
    }
    return false;
  }

  public isAdmin(): boolean {
    if (this.hasAdminRights) {
      return true;
    }
    return false;
  }

  public login(username: string, password: string): Observable<any> {
    let req = this.httpClient.post("http://localhost:5000/login", {
      username: username,
      password: password
    }, { responseType: 'text', withCredentials: true }).pipe(share());

    req.subscribe((data : string) => {
      // localStorage.setItem("user", username);
      const dataJson = JSON.parse(data);
      this.loggedInUserName = username;
      this.hasAdminRights = dataJson[0].admin;
      this.userPoints = dataJson[0].pontszam;
      this.justRegistered = false;

      console.debug("Logged in as admin? " + this.hasAdminRights);

      localStorage.setItem('user', username);
      let adminValue : string;

      if (this.hasAdminRights) {
        adminValue = '1';
      } else {
        adminValue = '0';
      }

      localStorage.setItem('admin', adminValue);
      localStorage.setItem('points', this.userPoints.toString());
    }, (error) => {
      console.error("Login failed:")
      console.error(error);
    });

    return req;
  }

  public register(username: string, password: string): Observable<any> {
    let req = this.httpClient.post("http://localhost:5000/register", {
      username: username,
      password: password
    }, { responseType: 'text' }).pipe(share());

    

    req.subscribe((data) => {
      // localStorage.setItem("user", username);
      console.debug(data);
      this.justRegistered = true;
      // this.loggedInUserName = username;
      
    }, (error) => {
      console.error("Registration failed:");
      console.error(error);
    });

    return req;
  }

  public logout(): Observable<any> {
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

  public getLeaderBoard() : Observable<any> {
    let req = this.httpClient.get("http://localhost:5000/toplist", { 
      responseType: 'json',
      withCredentials: true,
      headers : new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })}).pipe(share());

    return req;
  }
}
