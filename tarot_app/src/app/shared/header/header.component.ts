import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';
  @Input() button: string = '';
  @Output() whenClick = new EventEmitter<any>();

  onClickButton(event: any) {
    this.whenClick.emit(event);
  }

  ngOnInit(): void {}
}
