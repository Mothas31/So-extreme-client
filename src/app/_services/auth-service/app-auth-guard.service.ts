import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router} from '@angular/router';
import { StorageService } from '../storage-service/storage.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  private loader$ = new Subject<boolean>()
  public loader = false
  
  constructor(private _authService: AuthService, private _storageService: StorageService,private router: Router) {
    this.loader$.subscribe(loader => {
      this.loader = loader
    })
  }

  canActivate(routeParams):Observable<boolean> | Promise<boolean> | boolean {
    this.loader$.next(true)
    if(!this._storageService.getUserEmailProfil()){
      return this._authService.login(routeParams.routeConfig.path).pipe(
        map(user => {
          if(user) {
            this.loader$.next(false)
            this._storageService.setUserData(user)
            return true
          } else {
            return false
          }
        })
      )
    } else {
      this.loader$.next(false)
      return true
    }
  }
}