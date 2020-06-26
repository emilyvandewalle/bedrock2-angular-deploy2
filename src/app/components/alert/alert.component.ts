import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  @Input() skin?: string = 'default';
  constructor() { }

  ngOnInit(): void {
  }

}
