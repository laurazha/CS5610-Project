import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.css']
})
export class ProfessorEditComponent implements OnInit {
  user: User;

  constructor(private router: Router,
              private sharedService: SharedService,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

}
