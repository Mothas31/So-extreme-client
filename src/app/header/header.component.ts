import { Component, OnInit, Input, HostListener, ChangeDetectorRef } from '@angular/core';
import {Router} from "@angular/router";
import { StorageService } from '../_services/storage-service/storage.service';
import { AuthService } from '../_services/auth-service/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('rollerChat', [
      transition(':enter', [   
        style({height:0}),
        animate(200, style({height:500})) 
      ]),
      transition(':leave', [   
        animate(500, style({height:0})) 
      ])
    ]),
    trigger('rollerNotif', [
      transition(':enter', [   
        style({height:0}),
        animate(200, style({height:200})) 
      ]),
      transition(':leave', [   
        animate(500, style({height:0})) 
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public scrolled: boolean
  public userPicture: string
  public lockMenu: boolean

  private subscription

  @Input() public className: string
  @Input() public triggerMenu: boolean
  @Input() public hideMenu: boolean

  constructor(private _authService: AuthService, private _storageService: StorageService,private _router: Router, private _cdRef : ChangeDetectorRef) {
    this.scrolled = false
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollFunction()
  }

  ngOnInit() {
    this.lockMenu = true
    this.hideMenu = this.hideMenu || false
  }
  
  ngAfterViewChecked(){
    this.userPicture = this._storageService.getUserPhotoProfil()
    this._cdRef.detectChanges()
  }

  ngAfterViewInit(){
    this.scrollFunction()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public goDashboard() {
    this._router.navigate(['/dashboard'])
  }

  public connect(){
    this.lockMenu = false
    this.subscription = this._authService.login().subscribe(url => {
      window.location.href = url
    })
  }

  public disconnect(){
    this.lockMenu = false
    this.subscription = this._authService.logout().subscribe(url => {
      setTimeout(()=> {
        this._storageService.clearProfil()
        window.location.href = url
      }, 1200)
    })
  }

  public register(){
    this.lockMenu = false
    this.subscription = this._authService.register().subscribe(url => {
      setTimeout(()=> {
        window.location.href = url
      }, 1200)
    })
  }

  private scrollFunction(){
    if(window.pageYOffset > 12) {
      this.scrolled= true;
    } else {
      this.scrolled= false;
    }
  }
}
