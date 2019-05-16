import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {

  constructor(private userService : ServiceUserService) { }

  ngOnInit() {
  }

}
