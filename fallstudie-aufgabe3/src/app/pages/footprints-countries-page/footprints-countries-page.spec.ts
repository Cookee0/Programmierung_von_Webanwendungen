import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintsCountriesPage } from './footprints-countries-page';

describe('FootprintsCountriesPage', () => {
  let component: FootprintsCountriesPage;
  let fixture: ComponentFixture<FootprintsCountriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootprintsCountriesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootprintsCountriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
