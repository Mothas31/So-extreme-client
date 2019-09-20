import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  public setUserData(data){
    localStorage.setItem('userPicture', data.avatar || JSON.parse(data).avatar || JSON.parse(data).picture)
    localStorage.setItem('userEmail', data.email || JSON.parse(data).email || JSON.parse(data).email)
    localStorage.setItem('userFirstName', data.firstname || JSON.parse(data).firstname || JSON.parse(data).given_name)
    localStorage.setItem('userLastName', data.lastname || JSON.parse(data).lastname || JSON.parse(data).family_name)
    localStorage.setItem('userType', data.relname || JSON.parse(data).relname || '')
  }

  public getUserEmailProfil(){
    return localStorage.getItem('userEmail')
  }
  
  public getUserFirstNameProfil(){
    return localStorage.getItem('userFirstName')
  }

  public getUserLastNameProfil(){
    return localStorage.getItem('userLastName')
  }
  
  public getUserPhotoProfil(){
    return localStorage.getItem('userPicture')
  }

  public getUserTypeProfil():string{
    return localStorage.getItem('userType')
  }

  public clearProfil(){
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userFirstName')
    localStorage.removeItem('userLastName')
    localStorage.removeItem('userPicture')
    localStorage.removeItem('userType')
  }
}
