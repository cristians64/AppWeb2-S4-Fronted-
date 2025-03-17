import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modificables2Component } from './modificables2.component';

describe('Modificables2Component', () => {
  let component: Modificables2Component;
  let fixture: ComponentFixture<Modificables2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modificables2Component]
    });
    fixture = TestBed.createComponent(Modificables2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
