import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuellenhinweisPage } from './quellenhinweis-page';

describe('QuellenhinweisPage', () => {
  let component: QuellenhinweisPage;
  let fixture: ComponentFixture<QuellenhinweisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuellenhinweisPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuellenhinweisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
