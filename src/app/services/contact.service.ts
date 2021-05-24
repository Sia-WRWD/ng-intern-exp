import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactDetails } from '../shared/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _url = 'http://localhost:3000/contact';
  constructor(private _http: HttpClient) { }

  enroll(contactReq: contactDetails) {
    return this._http.post<any>(this._url, contactReq);
  }
}
