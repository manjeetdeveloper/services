import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GetAPi in Angular';
  users: any;
  constructor(private userData: UserDataService) {
    this.loadUsers();
  }

  loadUsers() {
    this.userData.users().subscribe(
      (data) => {
        console.warn('data', data);
        this.users = data;
      },

    );
  }
}
