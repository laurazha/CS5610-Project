import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.css']
})
export class ProfessorEditComponent implements OnInit {
  user: User;
  professors: User[] = [];

  constructor(private router: Router,
              private sharedService: SharedService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) { }
  deleteUser(userId) {
    return this.userService.deleteUserInServer(userId).subscribe(
      () => {
        this.router.navigate(['/admin/professor']);
        this.ngOnInit(); // refresh current page
      }
    );
  }

  findUserById(userId) {
    console.log(userId);
    return this.userService.findUserById(userId).subscribe(
      (user: User) => {
        this.user = user;
        console.log(this.user);
      }
    );
  }

  updateUser(userId, changed_user) {
    return this.userService.updateUserInServer(userId, changed_user).subscribe(
      () => {
        location.reload();
      }
    );
  }

  ngOnInit() {
    this.userService.findAllProfessors().subscribe(
      (professors: User[]) => {
        this.professors = professors;
      }
    );
  }

}
