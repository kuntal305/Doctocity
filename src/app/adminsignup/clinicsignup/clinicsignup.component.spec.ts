import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsignupComponent } from './clinicsignup.component';

describe('ClinicsignupComponent', () => {
  let component: ClinicsignupComponent;
  let fixture: ComponentFixture<ClinicsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
