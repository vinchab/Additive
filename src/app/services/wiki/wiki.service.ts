import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(
    private _http: HttpClient
  ) { }

  async getAdditiveById(id:string) {
    return this._http.get<{extract_html?: string}>('https://fr.wikipedia.org/api/rest_v1/page/summary/e' + id)
      .pipe(
        map(res => res?.extract_html)
      )
      .toPromise()
      .catch(err => err) 
  }
}
