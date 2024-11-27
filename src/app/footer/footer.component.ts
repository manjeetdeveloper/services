import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
  ngOnInit(): void
{
  
}
}
