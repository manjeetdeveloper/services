import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Service';
  users:any;
  constructor(private  userdata:UserDataService)
  {
    console.warn("userdata",userdata.users())
    this.users=userdata.users();
  }
}
