import {Component, Input, output, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatOption, MatSelect, MatSelectChange} from '@angular/material/select';
import {merge, startWith} from 'rxjs';
import {FilterPayload} from '../types/filter-payload-type/filter-payload-interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Company} from '../types/company-type/company-interface';

@Component({
  selector: 'app-search-form-shared',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatPaginator
  ],
  templateUrl: './search-form-shared.html',
  styleUrl: './search-form-shared.css'
})

export class SearchFormShared {

  @Input ({required: true}) dataSource!: MatTableDataSource<Company>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filterChange = output<FilterPayload>();

  countryCtrl = new FormControl('', { nonNullable: true });
  companyCtrl = new FormControl('', { nonNullable: true });
  yearsCtrl   = new FormControl<(number|null)[] | null>(null);

  yearsList = [2019, 2020, 2021, 2022, 2023];

  paginatorReady = output<MatPaginator>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    merge(
      this.countryCtrl.valueChanges,
      this.companyCtrl.valueChanges,
      this.yearsCtrl.valueChanges
    ).pipe(startWith(null)).subscribe(() => this.emit());
  }

  onYearsSelectionChange(e: MatSelectChange) {
    const v = e.value as (number|null)[] | null;
    if (Array.isArray(v) && v.includes(null)) this.yearsCtrl.setValue(null, { emitEvent: true });
  }

  private emit() {
    const sel = this.yearsCtrl.value;
    const years = !sel || sel.includes(null) ? null : (sel as number[]);
    const payload: FilterPayload = {
      country: this.countryCtrl.value.trim().toLowerCase(),
      company: this.companyCtrl.value.trim().toLowerCase(),
      years,
    };
    this.filterChange.emit(payload);
  }
}
