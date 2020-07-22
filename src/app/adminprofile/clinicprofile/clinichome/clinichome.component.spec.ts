import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinichomeComponent } from './clinichome.component';

describe('ClinichomeComponent', () => {
  let component: ClinichomeComponent;
  let fixture: ComponentFixture<ClinichomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinichomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinichomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
