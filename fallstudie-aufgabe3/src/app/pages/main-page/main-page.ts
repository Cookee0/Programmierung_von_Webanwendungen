import {Component, input, signal} from '@angular/core';
import {Co2TableComponent} from '../../components/co2-table-component/co2-table-component';

@Component({
  selector: 'app-main-page',
  imports: [Co2TableComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  mainTitle = input('MainPage');
}
