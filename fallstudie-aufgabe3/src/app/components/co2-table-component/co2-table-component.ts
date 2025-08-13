import {Component, inject} from '@angular/core';
import {Co2TableService} from '../../services/co2-table-service';

@Component({
  selector: 'app-co2-table-component',
  imports: [],
  templateUrl: './co2-table-component.html',
  styleUrl: './co2-table-component.css',
})
export class Co2TableComponent {

  private co2TableService = inject(Co2TableService)

  companiesJSON = this.co2TableService.data;

  companiesString = this.companiesJSON.toString();

/*  sayHi(): void {
    this.co2TableService.cumshot('Hier')
  }*/
  protected readonly Number = Number;
}
