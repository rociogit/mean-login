import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOficinasComponent } from './crear-oficinas.component';

describe('CrearOficinasComponent', () => {
  let component: CrearOficinasComponent;
  let fixture: ComponentFixture<CrearOficinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearOficinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
