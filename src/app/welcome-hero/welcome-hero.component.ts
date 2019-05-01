import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRegisterDatashareService } from "../service-register-datashare.service";

@Component({
  selector: 'app-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styleUrls: ['./welcome-hero.component.css']
})
export class WelcomeHeroComponent implements OnInit {

  regUsername : string;
  namesArray = ['Fletch Skinner', 'Eleanor Fant', 'Archibald Northbottom', 'Malcolm Function', 'Gordon Norman', 'Alan Fresco', 'Carnegie Mondover', 'Guy Mann', 'Jake Weary', 'John Doe', 'Giles Posture', 'Dylan Meringue', 'Gunther Beard'];
  randomName : string = this.getRandomName();

  constructor(private router : Router, private regDataShare : ServiceRegisterDatashareService) { }

  ngOnInit() {
  }

  getRandomName() {
    return this.namesArray[Math.floor(Math.random() * this.namesArray.length)];
  }

  register() {
    console.log("Navigating to register with username " + this.regUsername)
    this.regDataShare.sharedUsername = this.regUsername;
    this.router.navigate(['/signup']);
  }

}
