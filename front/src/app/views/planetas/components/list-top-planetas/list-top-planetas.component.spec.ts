import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopPlanetasComponent } from './list-top-planetas.component';

describe('ListTopPlanetasComponent', () => {
  let component: ListTopPlanetasComponent;
  let fixture: ComponentFixture<ListTopPlanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopPlanetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
