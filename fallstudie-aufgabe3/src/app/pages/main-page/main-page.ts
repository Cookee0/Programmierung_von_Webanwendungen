import {Component, input, signal} from '@angular/core';
import {Co2TableComponent} from '../../components/co2-table-component/co2-table-component';
import {NgOptimizedImage} from '@angular/common';
import {GlobalButtonsShared} from '../../shared/global-buttons-shared/global-buttons-shared';

@Component({
  selector: 'app-main-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
}
