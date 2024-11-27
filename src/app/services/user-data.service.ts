import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  users(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
