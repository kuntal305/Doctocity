import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicnotificationsComponent } from './clinicnotifications.component';

describe('ClinicnotificationsComponent', () => {
  let component: ClinicnotificationsComponent;
  let fixture: ComponentFixture<ClinicnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
