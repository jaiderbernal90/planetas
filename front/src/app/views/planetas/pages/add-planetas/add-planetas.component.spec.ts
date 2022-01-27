import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanetasComponent } from './add-planetas.component';

describe('AddPlanetasComponent', () => {
  let component: AddPlanetasComponent;
  let fixture: ComponentFixture<AddPlanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlanetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
