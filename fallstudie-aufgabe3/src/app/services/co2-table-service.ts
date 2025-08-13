import {inject, Injectable} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {HttpClient} from '@angular/common/http';

interface Company {
  year: number;
  parent_entity: string;
  parent_type: string;
  lei: string;
  total_emissions: number;
  land: string;
}

@Injectable({
  providedIn: 'any'
})
export class Co2TableService {
  // cumshot(message: string) {console.log(message);}

  private http = inject(HttpClient);

  data= toSignal(
    this.http.get<Company[]>('/companies_with_country.json'),
    {initialValue: null}
  )

}
