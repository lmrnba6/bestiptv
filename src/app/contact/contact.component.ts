import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../_services/user.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public block: boolean;
  public error: boolean;
  public success: boolean;
  public contactForm: FormGroup;
  public name: FormControl;
  public mac: FormControl;
  public message: FormControl;
  public device: FormControl;
  public phone: FormControl;
  public email: FormControl;

  public color: string = 'warn';
  public mode: string = 'indeterminate';
  public value: number = 100;
  public diameter: number = 48;

  constructor(private fb: FormBuilder,
              private location: Location,
              public snackBar: MatSnackBar,
            private userService: UserService) { }

  ngOnInit() {

  }

    /**
   * validateForm
   */
  public validateForm(): boolean {
    let isFormValid: boolean = false;
    if (this.name && this.device && this.mac && this.email && this.phone) {
      isFormValid = true;
    }
    return isFormValid;
  }

  

  /**
   * onCancel
   */
  public onSubmit(): void {
    if(this.validateForm()) {
      this.userService.send({
         name: this.name,
         mac: this.mac,
         message: this.message,
         device: this.device,
         phone: this.phone,
         email: this.email
      }).subscribe( res => {
       
      },
      err => {
        
      });
      this.location.back();
      this.notifyMessage('Succès: opération réussie', '', 'success')
    } else {
      this.notifyMessage('Erreur: Please fill all feild', '', 'error');

    } 
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
