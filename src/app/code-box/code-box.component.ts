import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.sass']
})
export class CodeBoxComponent implements OnInit {
  @Input('code')
  code:String;

  constructor() { }

  ngOnInit(): void {
  }

}
