import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class AbcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
