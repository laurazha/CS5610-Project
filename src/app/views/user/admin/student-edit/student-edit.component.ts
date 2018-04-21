import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  user: User;
  students: User[] = [];

  constructor(private router: Router,
              private sharedService: SharedService,
              private userService: UserService) {
    this.user = new User(null, null, null, null, null, null, null);
    this.students = [];
  }

  deleteUser(userId) {
    return this.userService.deleteUserInServer(userId).subscribe(
      () => {
        this.router.navigate(['/admin/student']);
        this.ngOnInit();
      }
    );
  }

  findUserById(userId) {
    return this.userService.findUserById(userId).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }

  updateUser(userId, changed_user) {
    return this.userService.updateUserInServer(userId, changed_user).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  ngOnInit() {
    this.user = this.sharedService.user;

    this.userService.findAllStudents().subscribe(
      (students: User[]) => {
        this.students = students;
      });
  }

}
