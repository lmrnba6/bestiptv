import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import { MatSnackBar, PageEvent } from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

import { DialogsService } from '../_services/dialogs.service';

import { Setting } from '../models/setting';

@Component({
  selector: 'app-abstract-table',
  templateUrl: './abstract-table.component.html',
  styleUrls: ['./abstract-table.component.scss']
})
export class AbstractTableComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() public data: any;
  @Input() public setting: Setting;
  @Output() deleteRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() addRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() refresh: EventEmitter<any> = new EventEmitter<any>();
  @Output() editRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() info: EventEmitter<any> = new EventEmitter<any>();
  @Output() saveRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() emailRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() responsible: EventEmitter<any> = new EventEmitter<any>();
  @Output() externalLink: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataSource: MatTableDataSource<any>;
  public fileNameDialogRef: MatDialogRef<any>;
  public displayedColumns: any;
  public color: string = 'warn';
  public mode: string = 'indeterminate';
  public value: number = 100;
  public diameter: number = 48;
  public block: boolean;
  public dialogHeader: string = 'Attention';
  public length: number = 100;
  public pageSize: number = 10;
  public pageSizeOptions: Array<number> = [5, 10, 25, 100];
  public pageEvent: PageEvent;

  constructor(
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayedColumns = this.setting.cols.map(x => x.columnDef);
    if (this.data) {
      this.dataSource = new MatTableDataSource<any>(this.data.items);
      this.length = this.data.paging.totalCount;
    }
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string): void {
    //filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
    this.filter.emit(filterValue);
  }

  /**
   * onDeleteRow
   */
  public onDeleteRow(id: number): void {
    this.deleteRow.emit(id);
  }

  /**
   * sortChange
   */
  public sortOnChange(col: string): void {
    this.paginator.pageIndex = 0;
    this.sortChange.emit({
      col,
      sortDirection: this.sort.direction
    });
  }

  /**
   * pageOnChange
   */
  public pageOnChange(event: any): void {
    this.pageChange.emit(event);
  }

  /**
   * onDeleteRow
   */
  public onDisplayResponsible(id: number): void {
    this.responsible.emit(id);
  }

  /**
   * onRefresh
   */
  public onRefresh(): void {
    this.refresh.emit();
  }

  /**
   * onExternalLink
   */
  public onExternalLink(event: any): void {
    this.externalLink.emit(event);
  }

  /**
   * onEditRow
   */
  public onEditRow(data: any): void {
    this.editRow.emit(data);
  }

  /**
   * onEditRow
   */
  public onInfo(data: any): void {
    this.info.emit(data);
  }

  /**
   * onAddRow
   */
  public onAddRow(): void {
    this.addRow.emit();
  }

  /**
   * onSaveRow
   */
  public onSaveRow(): void {
    this.saveRow.emit();
  }

  /**
   * onAddRow
   */
  public onEmailRow(): void {
    this.emailRow.emit();
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