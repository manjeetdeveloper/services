import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users()
  {
    return [
      {name:'Manjeet', age:21 , email:'manjeet@test.com'},
      {name:'abhishek', age:22 , email:'abhishek@test.com'},
      {name:'vishal', age:31 , email:'vishal@test.com'},
      {name:'sumit', age:11 , email:'sumit@test.com'},


    ]
  }
}
