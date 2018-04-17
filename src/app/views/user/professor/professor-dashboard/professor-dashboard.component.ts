import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-professor-dashboard',
  templateUrl: './professor-dashboard.component.html',
  styleUrls: ['./professor-dashboard.component.css']
})
export class ProfessorDashboardComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

}
