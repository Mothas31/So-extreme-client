import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, RouterEvent, NavigationEnd  } from '@angular/router';
import { AuthGuardService } from './_services/auth-service/app-auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  activate : boolean
  activateMenu : boolean
  backgroundColor : "default-background"
  userType: string

  constructor(private _router: Router ,public _authGuard: AuthGuardService, private _cdRef : ChangeDetectorRef) { 
    this.activate = false
  }

  ngOnInit(): void {
    this._router.events.subscribe((route: RouterEvent) => {
      let regex = /\/+\?+state=/y
      this.activateMenu = ((route && route.url)? !regex.test(route.url) : this.activateMenu ) 
    })
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  ngAfterViewChecked(){
    this._cdRef.detectChanges();
  }

  public toggle() : void {
    this.activate = !this.activate;
  }
}