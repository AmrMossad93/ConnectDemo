import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(event: any): void {
    let x = {
      userName: event.userName,
      userPassword: event.password,
    };
    console.log('Official OBJ', x);
    localStorage.setItem('projectName', 'Official');
  }
}
