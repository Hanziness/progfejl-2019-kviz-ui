import { Component, OnInit } from '@angular/core';
import { ServiceRegisterDatashareService } from "../service-register-datashare.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface FormData {
  username : string,
  password : string,
  termsAccepted : boolean
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

  constructor(private dataShareService : ServiceRegisterDatashareService) { }

  ngOnInit() {
    this.formData = {
      "username": "",
      "password": "",
      "termsAccepted": false
    };

    if (this.dataShareService.sharedUsername) {
      this.formData.username = this.dataShareService.sharedUsername;
      this.prefilled = true;
    }

    this.formGroup = new FormGroup({
      'username': new FormControl(this.formData.username, [ Validators.required ]),
      'password': new FormControl(this.formData.password, [ Validators.required ]),
      'termsAccepted': new FormControl(this.formData.termsAccepted, [ Validators.required ])
    })

  }

}
