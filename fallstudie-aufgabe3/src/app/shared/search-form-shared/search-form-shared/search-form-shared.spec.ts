import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormShared } from './search-form-shared';

describe('SearchFormShared', () => {
  let component: SearchFormShared;
  let fixture: ComponentFixture<SearchFormShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFormShared]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFormShared);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
