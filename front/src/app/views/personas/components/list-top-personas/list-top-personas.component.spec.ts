import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopPersonasComponent } from './list-top-personas.component';

describe('ListTopPersonasComponent', () => {
  let component: ListTopPersonasComponent;
  let fixture: ComponentFixture<ListTopPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
