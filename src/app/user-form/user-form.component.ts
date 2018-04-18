import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ReferenceTableData } from '../models/referenceTableData';
import { UserRole } from '../models/userRole';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public user: User;
  public block: boolean;
  public isOnEdit: boolean;
  public userForm: FormGroup;
  public username: FormControl;
  public lastname: FormControl;
  public firstname: FormControl;
  public courriel: FormControl;

  public color: string = 'warn';
  public mode: string = 'indeterminate';
  public value: number = 100;
  public diameter: number = 48;

  constructor(private fb: FormBuilder,
              public snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private userService: UserService,
              private location: Location
              ) { }

  public ngOnInit(): void {
    this.initForm();
    this.getParams();
  }

  /**
   * getParams
   */
  public getParams(): void {
    this.route.params.subscribe(res => {
      if (res.id) {
        this.getData(res.id);
        this.isOnEdit = true;
      } else {
        this.isOnEdit = false;
        this.user = new User();
      }
    });
  }

  /**
   * get data
   *
   * @param  {string} name user name
   * @returns void
   */
  public getData(id: number): void {
    this.userService
      .getById(id)
      .subscribe(val => (this.user = val));
  }

  public initForm(): void {
    this.firstname = new FormControl(null, [Validators.required]);
    this.lastname = new FormControl(null, [Validators.required]);
    this.username = new FormControl(null, [Validators.required]);
    this.courriel = new FormControl(null, [Validators.required]);
    this.userForm = this.fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      courriel: this.courriel
    });
  }

  /**
   * onSave
   */
  public onSave(): void {
    this.onSaveOrUpdate();
  }

  /**
   * constractEmailModelForUpdate
   */
  public constractEmailModelForUpdate(user: User): any {
    return {
      attributes: {
        lastname: user.lastname,
        firstname: user.firstname,
        username: user.username,
        courriel: user.courriel
      },
      options: {
        where: {
          id: user.id
        }
      }
    };
  }

  /**
   * onSave
   */
  public onSaveOrUpdate(): void {
    if (this.validateForm(this.user)) {
      let userObservable: Observable<any> = this.userService.getAll();
      if (this.isOnEdit) {
        userObservable = this.userService.update(this.constractEmailModelForUpdate(this.user));
      } else {
        userObservable = this.userService.create(this.user);
      }
      this.block = true;
      userObservable.subscribe(
        res => {
          this.block = false;
          this.location.back();
          this.notifyMessage('Succès: opération réussie', '', 'success');
        },
        err => {
          this.notifyMessage('Erreur: ' + err._body, '', 'error');
          this.block = false;
        });
    } else {
      this.notifyMessage('Erreur: Veuillez remplir tous les champs', '', 'error');
    }
  }

  /**
   * validateForm
   */
  public validateForm(user: any): boolean {
    let isFormValid: boolean = false;
    if (user.lastname && user.firstname && user.username && user.courriel) {
      isFormValid = true;
    }
    return isFormValid;
  }

  /**
   * onCancel
   */
  public onCancel(): void {
    this.location.back();
  }

  public getErrorMessage(): any {
    return 'Vous devez rentrer une valeur';
  }

  /**
   * notifyMessage
   */
  public notifyMessage(message: string, action: string, result: string): void {
    this.snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      extraClasses: [result]
    });
  }

}
