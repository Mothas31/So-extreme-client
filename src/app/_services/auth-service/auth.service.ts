import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api-service/api.service';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _apiService: ApiService) { }

  public login(target?): Observable<any> {
    let token = new URL(location.href).searchParams.get("code")
      if (token === undefined || token === null){
        return this._http.get(API_URL + 'login', {responseType: 'text'}).pipe(map(this._apiService.extractData.toString))
      } else {
        return this._http.post(API_URL + 'login/code',{"token": token, "target": target},{responseType: 'text'}).pipe(map(this._apiService.extractData.toString))
      }
  }

  public logout(): Observable<any> {
    return this._http.get(API_URL + 'logout', {responseType: 'text'}).pipe(map(this._apiService.extractData.toString))
  }

  public register(): Observable<any> {
    return this._http.get(API_URL + 'register', {responseType: 'text'}).pipe(map(this._apiService.extractData.toString))
  }

  public signup(dataRegistring, typeUser): Observable<any> {
    return this._http.put(API_URL + 'user/signup',{data: dataRegistring, type: typeUser}, {responseType: 'text'}).pipe(map(this._apiService.extractData.toString))
  }
}
