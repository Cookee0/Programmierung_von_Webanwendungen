import {Component, effect, inject, signal, ViewChild} from '@angular/core';
import {Co2TableService, Company} from '../../services/co2-table-service';
import {DecimalPipe} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-co2-table-component',
  imports: [
    DecimalPipe,
    MatTableModule,
    MatSortHeader,
    MatSort,
    MatFormField,
    MatFormField,
    MatLabel,
    MatInput,
    MatFormField,
    MatLabel
  ],
  templateUrl: './co2-table-component.html',
  styleUrl: './co2-table-component.css',
})
export class Co2TableComponent {

  private co2TableService = inject(Co2TableService)

  displayedColumns = ['year', 'parent_entity', 'country', 'total_emissions_MtCO2e']

  countrySearch = signal('');
  companySearch = signal('');

  @ViewChild(MatSort) sort!: MatSort;

  companiesDataSource = new MatTableDataSource<Company>([]);

  constructor() {
    effect(() => {
      this.companiesDataSource.data = this.co2TableService.data();
    });

    this.companiesDataSource.filterPredicate = (row, filter) => {

      let f: {country: string; company: string};

      try{
        f = JSON.parse(filter || '{}');
      } catch {
        f = {country: '', company: ''};
      }

      const country = (f.country || '').toLowerCase();
      const company = (f.company || '').toLowerCase();

      const countryOk =
        !country || (row.country ?? '').toLowerCase().includes(country);
      const companyOk =
        !company || (row.parent_entity ?? '').toLowerCase().includes(company);

      return countryOk && companyOk; // AND-combine both filters

    }

    effect(() => {
      const filterObj = {
        country: this.countrySearch().trim().toLowerCase(),
        company: this.companySearch().trim().toLowerCase(),
      };
      this.companiesDataSource.filter = JSON.stringify(filterObj);
      if (this.companiesDataSource.paginator) this.companiesDataSource.paginator.firstPage();
    });
  }

  ngAfterViewInit() {
    this.companiesDataSource.sort = this.sort;
  }

}


