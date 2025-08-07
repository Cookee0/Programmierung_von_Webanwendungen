import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  mainTitle = input('MainPage');
}
