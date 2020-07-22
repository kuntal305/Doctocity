import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksucessComponent } from './booksucess.component';

describe('BooksucessComponent', () => {
  let component: BooksucessComponent;
  let fixture: ComponentFixture<BooksucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
