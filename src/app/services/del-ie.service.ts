import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addIE } from '../shared/addIE';

@Injectable({
  providedIn: 'root'
})
export class DelIeService {

  _url = 'http://localhost:3000/delIe';
  constructor(private _http: HttpClient) { }

  delete(ieReq: addIE) {
    return this._http.post<any>(this._url, ieReq);
  }
}
