import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificablesComponent } from './modificables.component';

describe('ModificablesComponent', () => {
  let component: ModificablesComponent;
  let fixture: ComponentFixture<ModificablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificablesComponent]
    });
    fixture = TestBed.createComponent(ModificablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
