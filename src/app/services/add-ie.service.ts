import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addIE } from '../shared/addIE';

@Injectable({
  providedIn: 'root'
})
export class AddIEService {
  _url = 'http://localhost:3000/addIe';
  constructor(private _http: HttpClient) { }

  share(ieReq: addIE) {
    return this._http.post<any>(this._url, ieReq);
  }
}
