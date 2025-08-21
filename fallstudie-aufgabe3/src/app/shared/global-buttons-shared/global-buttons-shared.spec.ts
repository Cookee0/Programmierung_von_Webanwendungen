import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GlobalButtonsShared} from './global-buttons-shared';

describe('GlobalButtonsShared', () => {
  let component: GlobalButtonsShared;
  let fixture: ComponentFixture<GlobalButtonsShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalButtonsShared]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GlobalButtonsShared);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
