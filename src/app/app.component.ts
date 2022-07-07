import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ShoesService } from './layout/service/shoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'provaGenerale';

  openMenuBoolean : boolean = false;
  constructor(private authService: AuthService, private shoesService: ShoesService){}
  
  ngOnInit(){
    this.authService.autoLogin();
    if(this.authService.idUserDatabase){
      this.shoesService.setCartList();
      console.log('funziona bene')
    }
  }

  openMenu(){
    this.openMenuBoolean = !this.openMenuBoolean
  }

}
