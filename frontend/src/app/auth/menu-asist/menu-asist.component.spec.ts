import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsistComponent } from './menu-asist.component';

describe('MenuAsistComponent', () => {
  let component: MenuAsistComponent;
  let fixture: ComponentFixture<MenuAsistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAsistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAsistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
