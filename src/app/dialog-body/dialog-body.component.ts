import { registerLocaleData } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss'],
  template: 'passed in {{ result.result }}',

})
export class DialogBodyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {data: string}) { }
  //  info = JSON.parse(this.data)
  ngOnInit(): void {
    console.log(this.data);
  }

}
