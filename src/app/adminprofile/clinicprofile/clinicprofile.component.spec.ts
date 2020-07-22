import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicprofileComponent } from './clinicprofile.component';

describe('ClinicprofileComponent', () => {
  let component: ClinicprofileComponent;
  let fixture: ComponentFixture<ClinicprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
