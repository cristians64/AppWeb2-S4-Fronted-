import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrusel2Component } from './carrusel2.component';

describe('Carrusel2Component', () => {
  let component: Carrusel2Component;
  let fixture: ComponentFixture<Carrusel2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carrusel2Component]
    });
    fixture = TestBed.createComponent(Carrusel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
