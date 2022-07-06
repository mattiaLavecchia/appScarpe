import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  hide = true;
  signUpForm: FormGroup = new FormGroup({ });
  errortype: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required )
    })
  }
  

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(){
   if(!this.signUpForm.valid){
    return;
   }

   const email = this.signUpForm.get('email')?.value;
   const password = this.signUpForm.get('password')?.value;

   let authObs$!: Observable<AuthResponseData>;
 
   
   if(this.isLoginMode){
     authObs$ = this.authService.login(email,password)
    }else {
      authObs$ = this.authService.signUp(email,password)
    }

    authObs$.subscribe(resData => {
     console.log(resData);
     this.router.navigate(['']);
   },errorRes => {
     console.log(errorRes);
     this.errortype = errorRes;
   })

  }
  
  


}
