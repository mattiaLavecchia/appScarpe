import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, ReplaySubject, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData{
  idToken: string;
  email:string;
  refreshToken:string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  idUserDatabase: string | null;
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkDphbzvC5FxZjOEquRB_ZhHz8y4iUeCQ', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(resData.email,resData.localId,resData.idToken, +resData.expiresIn);
        }));
  }
  
  login(email:string,password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkDphbzvC5FxZjOEquRB_ZhHz8y4iUeCQ', {
      email: email,
      password: password,
      returnSecureToken : true
    }).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(resData.email,resData.localId,resData.idToken, +resData.expiresIn);
     
      }));
  }

  logout(){
    this.user.next(null!);
    this.router.navigate(['']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer= null;
  }

  autoLogin(){
    const userData: {email:string,id:string,_token:string,_tokenExpirationDate:string} = JSON.parse(localStorage.getItem('userData')!);
    if(!userData){
      return;
    }
    const loadedUser = new User(userData.email,userData.id,userData._token, new Date(userData._tokenExpirationDate));
    if(loadedUser.token){
      this.user.next(loadedUser);
      this.idUserDatabase= userData.id;
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }

  }

  autoLogout(expirationDuration:number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
      this.idUserDatabase = null;
    },expirationDuration);
  }


  private handleAuthentication(email:string, localId:string, idToken:string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, localId, idToken, expirationDate);
      this.user.next(user);
      this.idUserDatabase = localId;
      this.autoLogout(expiresIn * 1000);
      localStorage.setItem('userData',JSON.stringify(user));
  };

  private handleError(errorRes : HttpErrorResponse){
    let errorMessage = 'An unkown error occurred';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS' :
          errorMessage = 'This email exists already';
          break;
      case 'EMAIL_NOT_FOUND' : 
          errorMessage = 'This email not found';
          break;
      case 'INVALID_PASSWORD':
          errorMessage = 'This password is invliad';
          break;
    }
    return throwError(errorMessage);
  };

  
}
