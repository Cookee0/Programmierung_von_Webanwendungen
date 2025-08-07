import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintsCompaniesPage } from './footprints-companies-page';

describe('FootprintsCompaniesPage', () => {
  let component: FootprintsCompaniesPage;
  let fixture: ComponentFixture<FootprintsCompaniesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootprintsCompaniesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootprintsCompaniesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
