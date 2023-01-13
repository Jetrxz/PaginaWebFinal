import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit{
  username = '';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.username = this.userService.getUsername();
  }
}
