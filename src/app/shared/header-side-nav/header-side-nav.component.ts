import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header-side-nav',
  templateUrl: './header-side-nav.component.html',
  styleUrls: ['./header-side-nav.component.scss']
})
export class HeaderSideNavComponent implements OnInit, OnDestroy {
  isAuthenticated = false
  private userSub : Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated= !!user;
    })
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
