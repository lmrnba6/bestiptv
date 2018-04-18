import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewChecked {

  public isConnected: boolean;
  public user: any;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.checkIsLoggedIn();
  }

  ngAfterViewChecked(): void {
    this.checkIsLoggedIn();
  }

  public checkIsLoggedIn(): void {
    this.isConnected = this.authService.isLogged();
    const user: any = JSON.parse(localStorage.getItem('user'));
    this.user = user && user.profile;
  }

}
