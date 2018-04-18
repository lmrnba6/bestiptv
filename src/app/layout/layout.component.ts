import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DialogsService } from '../_services/dialogs.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public options: any;
  public isSideNavOpened: boolean = true;
  public isConnected: boolean;
  public user: any;

    constructor(private location: Location,
                private dialogsService: DialogsService,
                private router: Router,
                private authService: AuthService) { }

    ngOnInit(): void {
      this.options = {
        fixed: false,
        top: 0,
        bottom: 0,
      };
      this.checkIsLoggedIn();
      this.authService.completeAuthentication().then(val => {
        this.checkIsLoggedIn();
      });
    }

    public checkIsLoggedIn(): void {
      this.isConnected = this.authService.isLogged();
      this.isSideNavOpened = this.isConnected;
      const user: any = JSON.parse(localStorage.getItem('user'));
      this.user = user && user.profile;
    }

    /**
     * toggleMenu
     */
    public toggleMenu(): void {
      this.isSideNavOpened = !this.isSideNavOpened;
    }

    /**
     * logIn
     */
    public login(event: any): void {
      event ? this.authService.startAuthentication() :
      this.authService.logout();
    }

}
