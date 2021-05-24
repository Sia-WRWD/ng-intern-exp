import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registrationDetails } from '../shared/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:3000/registration';
  constructor(private _http: HttpClient) { }

  enroll(registrationReq: registrationDetails) {
    return this._http.post<any>(this._url, registrationReq);
  }
}
