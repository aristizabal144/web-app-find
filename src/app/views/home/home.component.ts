import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userData: any = null;

  constructor() {}

  getDataEmit(data: any) {
    this.userData = data;
  }
}
