import { Component, OnInit } from '@angular/core';
import { ServiceRegisterDatashareService } from "../service-register-datashare.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceUserService } from '../service-user.service';
import { Router } from '@angular/router';

interface FormData {
  username : string,
  password : string
}

@Component({
  selector: 'app-page-signup',
  templateUrl: './page-signup.component.html',
  styleUrls: ['./page-signup.component.css']
})
export class PageSignupComponent implements OnInit {

  formData : FormData;

  prefilled : boolean = false;

  formGroup : FormGroup;

  constructor(
    private dataShareService : ServiceRegisterDatashareService,
    private userService : ServiceUserService,
    private router : Router) { }

  ngOnInit() {
    this.formData = {
      "username": "",
      "password": ""
    };

    if (this.dataShareService.sharedUsername) {
      this.formData.username = this.dataShareService.sharedUsername;
      this.prefilled = true;
    }

    // this.formGroup = new FormGroup({
    //   'username': new FormControl(this.formData.username, [ Validators.required ]),
    //   'password': new FormControl(this.formData.password, [ Validators.required ])
    // })

  }

  doRegister() {
    if (this.formData.username && this.formData.password) {
      this.userService.register(this.formData.username, this.formData.password).subscribe(() => {
        this.router.navigate(['/login']);
      });
    } else {
      console.warn("Form data was not valid!");
      console.warn(this.formData);
    }

  }
}
