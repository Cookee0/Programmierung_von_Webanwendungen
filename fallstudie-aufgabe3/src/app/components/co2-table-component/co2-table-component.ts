import {Component, effect, inject, ViewChild} from '@angular/core';
import {Co2TableService} from '../../services/co2-table-service';
import {DecimalPipe} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchFormShared} from '../../shared/search-form-shared/search-form-shared';
import {Company} from '../../shared/types/company-type/company-interface';
import {FilterPayload} from '../../shared/types/filter-payload-type/filter-payload-interface';

@Component({
  selector: 'app-co2-table-component',
  imports: [
    DecimalPipe,
    MatTableModule,
    MatSortHeader,
    MatSort,
    MatPaginatorModule,
    ReactiveFormsModule,
    SearchFormShared
  ],
  templateUrl: './co2-table-component.html',
  styleUrl: './co2-table-component.css',
})
export class Co2TableComponent {
  private svc = inject(Co2TableService);

  displayedColumns = ['year', 'parent_entity', 'country', 'total_emissions_MtCO2e'];
  dataSource = new MatTableDataSource<Company>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    // push rows into table
    effect(() => {
      this.dataSource.data = this.svc.data();
    });

    // one predicate that understands all filters
    this.dataSource.filterPredicate = (row, filterStr) => {
      let f: FilterPayload = {country: '', company: '', years: null};
      try {
        f = JSON.parse(filterStr) as FilterPayload;
      } catch {
      }
      const countryOk = !f.country || (row.country ?? '').toLowerCase().includes(f.country);
      const companyOk = !f.company || (row.parent_entity ?? '').toLowerCase().includes(f.company);
      const yearsOk = !f.years || f.years.length === 0 || f.years.includes(row.year);
      return countryOk && companyOk && yearsOk;
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onPaginatorReady() {
    this.dataSource.paginator = this.paginator;
  }

  // called from child
  applyFilter(payload: FilterPayload) {
    this.dataSource.filter = JSON.stringify(payload); // <- triggers refilter
    this.paginator?.firstPage();
  }
}


