import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormPlanetaComponent } from './add-form-planeta.component';

describe('AddFormPlanetaComponent', () => {
  let component: AddFormPlanetaComponent;
  let fixture: ComponentFixture<AddFormPlanetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormPlanetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
