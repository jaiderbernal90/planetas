import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormPersonasComponent } from './add-form-personas.component';

describe('AddFormPersonasComponent', () => {
  let component: AddFormPersonasComponent;
  let fixture: ComponentFixture<AddFormPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
