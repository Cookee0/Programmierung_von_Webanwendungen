import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-global-buttons-shared',
  imports: [],
  templateUrl: './global-buttons-shared.html',
  styleUrl: './global-buttons-shared.css'
})
export class GlobalButtonsShared {
  content = input('Default')
}
