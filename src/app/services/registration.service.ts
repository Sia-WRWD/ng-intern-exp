import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { registrationDetails } from '../shared/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:3000/registration';
  constructor(private _http: HttpClient) { }

  register(registrationReq: registrationDetails) {
    return this._http.post<any>(this._url, registrationReq).pipe(map(res=> {
      return res;
    }));
  }
}
