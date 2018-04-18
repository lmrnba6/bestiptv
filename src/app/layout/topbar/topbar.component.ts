import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common/src/i18n/locale_data_api';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() public isConnected: boolean;
  @Output() public login: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public menu: EventEmitter<boolean> = new EventEmitter<boolean>();
  public date: string;
  public user: any;
  public isMenuVisible: boolean;

  constructor(private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.setDate();
    this.setUser();
  }

  /**
   * hideOrShowMenu
   */
  public toggleMenu(): void {
    this.menu.emit();
  }

  /**
   * getUser
   */
  public getUser(): void {
    const username: any = JSON.parse(localStorage.getItem('user')).profile.name;
    this.userService
    .getAll()
    .subscribe(
    values => this.user = values.items.find(val =>
      val.username === username));
  }

  /**
   * set date
   */
  public setDate(): void {
    const today: Date = new Date();
    const day: Array<string> = new Array( 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche' );
    const months: Array<string> = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre') ;
    this.date = `${day[today.getUTCDay() - 1]} ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
  }

  /**
   * set user name
   */
  public setUser(): void {
    const user: any = JSON.parse(localStorage.getItem('user'));
    this.user = user && user.profile;
  }

  /**
   * login
   */
  public signIn(): void {
    this.login.emit(true);
  }

  /**
   * logOut
   */
  public signOut(): void {
    this.login.emit(false);
  }

}
