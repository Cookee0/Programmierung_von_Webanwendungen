import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

export interface Company {
  year: number;
  parent_entity: string;
  parent_type: string;
  lei: string;
  total_emissions_MtCO2e: number;
  country: string;
}

@Injectable({
  providedIn: 'any'
})
export class Co2TableService {
  // cumshot(message: string) {console.log(message);}

  private http = inject(HttpClient);

  data = toSignal(
    this.http.get<Company[]>('/emissions_last5y.json').pipe(
      map(arr => {
        return arr.map(r => ({
          ...r,
          total_emissions_MtCO2e: emissionsToNumber(r.total_emissions_MtCO2e)
        }));
      })
    ),
    { initialValue: [] as Company[] }
  )

}

function emissionsToNumber(value: unknown): number {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const cleaned = value.replace(/\s/g, '').replace(',', '.');
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : NaN;
  }

  const number = Number(value);
  return Number.isFinite(number) ? number : NaN;

}

