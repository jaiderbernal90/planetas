import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasTopComponent } from './personas-top.component';

describe('PersonasTopComponent', () => {
  let component: PersonasTopComponent;
  let fixture: ComponentFixture<PersonasTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
