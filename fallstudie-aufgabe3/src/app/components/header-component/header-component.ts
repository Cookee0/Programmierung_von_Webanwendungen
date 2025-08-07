import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar-component/navbar-component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {

}
