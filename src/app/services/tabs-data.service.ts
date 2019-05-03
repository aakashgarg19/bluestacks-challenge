import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsDataService {

  constructor(
    private _http: HttpClient
  ) { }

  public getTabData(): Observable<any> {
    return this._http.get('assets/json/tabsData.json');
  }
}
