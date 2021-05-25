import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { loginDetails } from '../shared/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url = 'http://localhost:3000/login';
  constructor(private _http: HttpClient) { }

  login(loginReq: loginDetails) {
    return this._http.post<any>(this._url, loginReq).pipe(map(res=> {
      return res;
    }));
  }
}
