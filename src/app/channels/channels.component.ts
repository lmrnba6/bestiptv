import { Component, OnInit } from '@angular/core';
import { EmailModel } from '../models/emailModel';
import { Setting } from '../models/setting';
import { DialogsService } from '../_services/dialogs.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import channels from './channels';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  public search: string;
  public ch: Array<any> = [];
  public data: any;
  public setting: Setting;
  public block: boolean;
  public color: string = 'warn';
  public mode: string = 'indeterminate';
  public value: number = 100;
  public diameter: number = 48;
  public dialogHeader: string = 'Attention';
  public pageIndex: number = 0;
  public pageSize: number = 10;
  public sortName: string = 'name';
  public sortDirection: string = 'DESC';
  public key: string;

  constructor(
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar,
    private router: Router) { }
  ngOnInit() {
    this.initSetting();
    this.getChannels();
    this.getDataTable();
  }

  /**
   * getChannels
   */
  public getChannels(): void {
    channels.forEach(channel => {
        this.ch.push(channel);
      });
  }

  /**
   * filter
   */
  public filter(key: string): void {
    this.ch = [];
    this.key = key;
    this.pageIndex = 0;
    channels.forEach(channel => {
        if (channel.name.toLowerCase().includes(key.toLowerCase()) || 
            channel.pack.toLowerCase().includes(key.toLowerCase())) {
          this.ch.push(channel);
        }
      });
    this.getDataTable();
  }

  getDataTable() {
    const offset: number = this.pageIndex * this.pageSize;
    const limit: number = ++this.pageIndex * this.pageSize;
    this.data = {
      items: this.ch && this.ch.slice(offset, limit),
      paging: {
        totalCount: this.ch.length
      }
    };
  }


  /**
   * sortOnChange
   */
  public sortOnChange(event: any): void {
    this.sortName = event.col;
    this.sortDirection = event.sortDirection;
    this.pageIndex = 0;
    if(this.sortDirection ==='asc'){
      this.ch = this.ch.sort((a,b) => a[this.sortName].localeCompare(b[this.sortName]));
    } else if (this.sortDirection ==='desc') {
      this.ch = this.ch.sort((a,b) => b[this.sortName].localeCompare(a[this.sortName]));
    } else {
      this.ch = [];
      this.getChannels();
    }
    this.getDataTable();
  }

  /**
   * onPageChange
   */
  public onPageChange(event: any): void {
    
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getDataTable();
  }

  public initSetting(): void {
    this.setting = new Setting();
    this.setting.settingColumn = false;
    this.setting.filter = true;
    this.setting.addRow = false;
    this.setting.cols = [
      { columnDef: 'pack', header: 'PACK', type: 'text', cell: row => `${row.pack}` },
      { columnDef: 'name', header: 'NAME', type: 'text', cell: row => `${row.name}` },
      { columnDef: 'logo', header: 'LOGO', type: 'icon', cell: row => `${row.logo}` },
    ];
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
