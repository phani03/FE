import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() value: number;
  @Output() refresh = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  setSliderValue(event) {
    this.value = event.target.value;
    this.setAgeRefresh(this.value);  
  }

  setAgeRefresh(age) {
    this.refresh.emit(age);
  }
}
