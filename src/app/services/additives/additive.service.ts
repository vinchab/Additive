import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdditiveService {

  private _data$: BehaviorSubject<any> = new BehaviorSubject(null)
  public data$: Observable<any> = this._data$.asObservable()

  constructor(
    private _http: HttpClient
  ) { }

  async load(){
    const data = await this._http.get('http://localhost:3000/additives').pipe(
      first()
    ).toPromise()
    
    this._data$.next(data)
  }

  async getItemById(id: string){
    const result = await this._data$.value.find(el => el.id === id)
    if(!result) return alert('no data');
        
    return result
  }
}
