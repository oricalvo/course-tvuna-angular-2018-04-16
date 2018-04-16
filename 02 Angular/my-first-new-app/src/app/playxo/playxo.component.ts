import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playxo',
  templateUrl: './playxo.component.html',
  styleUrls: ['./playxo.component.css']
})
export class PlayxoComponent implements OnInit {
  rows: any[];

  constructor() {
    this.rows = [
      {
        cells: [
          {value: ""},
          {value: ""},
          {value: ""},
        ]
      },
      {
        cells: [
          {value: ""},
          {value: ""},
          {value: ""},
        ]
      },
      {
        cells: [
          {value: ""},
          {value: ""},
          {value: ""},
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
