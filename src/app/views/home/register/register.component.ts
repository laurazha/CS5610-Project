import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('r') registerForm: NgForm;
  username: string;
  password: string;
  vpassword: string;
  type = 'STUDENT';

  errorFlag = false;
  errorMsg = 'Passwords mismatch!';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpassword = this.registerForm.value.vpassword;
    if (this.vpassword === this.password) {
      this.userService.register(this.username, this.password, this.type).subscribe(
        (user: User) => {
          this.errorFlag = false;
          if (!user.type) {   // facebook user
            user.type = this.type;
            this.userService.updateUserInServer(user._id, user);
          }
          if (this.type === 'STUDENT') {
            this.router.navigate(['/student']);
          } else if (this.type === 'PROFESSOR') {
            this.router.navigate(['/professor']);
          } else if (this.type === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.errorFlag = true;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
  }

}
