import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../_services/dialogs.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor(private dialogsService: DialogsService) { }

  ngOnInit() {
  }

  /**
   * onSeeDevices
   */
  public onSeeDevices(): void {
    this.dialogsService
          .confirm('Confirmation', '', 'how', 'warning', '800px', '800px')
          .subscribe(confirm => {
          });
  }

}
