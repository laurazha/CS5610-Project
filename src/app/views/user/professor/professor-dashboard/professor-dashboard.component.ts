import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professor-dashboard',
  templateUrl: './professor-dashboard.component.html',
  styleUrls: ['./professor-dashboard.component.css']
})
export class ProfessorDashboardComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private router: Router) { }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

}
