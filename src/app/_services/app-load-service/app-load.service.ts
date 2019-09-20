import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api-service/api.service';
import { map } from 'rxjs/operators';


@Injectable()
export class AppLoadService {

  constructor(private _http: HttpClient, private _apiService: ApiService) { }

  initializer(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this._http.get(this._apiService.getApiUrl() + 'healthCheck', {responseType: 'text'}).toPromise()
      .then(result => {
        console.log(result)
        resolve(true)
      }).catch(_err => {
        console.log(_err)
        resolve()
      })
    })
  }
}