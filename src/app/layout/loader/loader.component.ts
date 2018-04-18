import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public color;
  @Input() public mode;
  @Input() public value;
  @Input() public diameter;

  constructor() { }

  ngOnInit() {
  }

}
