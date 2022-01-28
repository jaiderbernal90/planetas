import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasTopComponent } from './planetas-top.component';

describe('PlanetasTopComponent', () => {
  let component: PlanetasTopComponent;
  let fixture: ComponentFixture<PlanetasTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetasTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
