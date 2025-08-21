import {Component} from '@angular/core';
import {GlobalButtonsShared} from '../../shared/global-buttons-shared/global-buttons-shared';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer-component',
  imports: [
    GlobalButtonsShared,
    RouterLink
  ],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {
  curDate = new Date().getFullYear();
}
