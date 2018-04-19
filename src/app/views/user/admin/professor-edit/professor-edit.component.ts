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
  modalFlag: boolean;

  constructor(private router: Router,
              private sharedService: SharedService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {

    this.user = new User(null, null, null, null, null, null, null);
    this.professors = [];
  }

  deleteUser(userId) {
    return this.userService.deleteUserInServer(userId).subscribe(
      () => {
        this.router.navigate(['/admin/professor']);
        this.ngOnInit(); // refresh current page
      }
    );
  }

  findUserById(userId) {
    this.userService.findUserById(userId).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
    if (this.user) {
      this.modalFlag = true;
    }
  }

  updateUser(userId, changed_user) {
    return this.userService.updateUserInServer(userId, changed_user).subscribe(
      () => {
        this.ngOnInit();
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
