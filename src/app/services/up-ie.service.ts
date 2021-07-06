import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addIE } from '../shared/addIE';

@Injectable({
  providedIn: 'root'
})
export class UpIeService {

  _url = 'http://localhost:3000/upIe';
  constructor(private _http: HttpClient) { }

  update(ieReq: addIE) {
    return this._http.put<any>(this._url, ieReq);
  }
}
