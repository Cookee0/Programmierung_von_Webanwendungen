import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {GlobalButtonsShared} from '../../shared/global-buttons-shared/global-buttons-shared';

@Component({
  selector: 'app-navbar-component',
  imports: [
    RouterLink,
    GlobalButtonsShared
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {

  protected readonly RouterLink = RouterLink;
}
