import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanetasComponent } from './list-planetas.component';

describe('ListPlanetasComponent', () => {
  let component: ListPlanetasComponent;
  let fixture: ComponentFixture<ListPlanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
