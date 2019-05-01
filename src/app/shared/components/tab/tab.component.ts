import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() actIndex = 0;
  @Input() data: any;
  @Input() tabTextProperty: string;
  @Input() header: string;
  @Input() dataProperty: string;
  constructor() { }

  ngOnInit() {
  }

  callIndex(i) {
    this.actIndex = i;
  }

}
