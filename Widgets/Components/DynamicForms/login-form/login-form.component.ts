import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() loginOBJ: EventEmitter<any> = new EventEmitter();
  login = {} as Login;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginOBJ.emit({
      userName: this.login.userName,
      password: this.login.password,
    });
  }
}

export interface Login {
  userName: string;
  password: string;
}
