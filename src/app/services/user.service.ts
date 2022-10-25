import { global } from './GLOBAL';
import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = '';

  public gethash = null;

  public identity: any;

  public token: any;

  constructor(private _http: HttpClient) {
      this.url = global.url;
   }

   Login(user:any, gethash:any=null): Observable<any>{
    if(gethash != false){
      user.gethash=gethash;
    }

    let json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login', json, {headers: headers})
   }

   getIdentity(): Observable<any> {
    if (localStorage != null) { 
      let identity = localStorage.getItem("identity");
      if (identity)   { this.identity = identity;} else { this.identity = null;}
      
    }
    return this.identity;
  }

   getToken(): Observable<any> {
    let token = localStorage.getItem('token');
    if    (token) { this.token = token; } else { this.token = null; }
    return this.token;
   }

  
}
