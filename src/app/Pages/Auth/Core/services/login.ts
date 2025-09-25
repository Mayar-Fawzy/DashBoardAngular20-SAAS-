import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IloginReseltRoot } from '../Interface/ilogin';
import { environment } from '../../../../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient); 
//mayar2878@gmail.com
//12121212
  Login(email: string, password: string): Observable<IloginReseltRoot> { 
    return this.http.post<IloginReseltRoot>(`${environment.apiUrl}/auth/signin`, { email, password });
  }
}