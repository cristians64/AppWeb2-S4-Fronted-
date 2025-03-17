import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginProComponent } from './form-login-pro.component';

describe('FormLoginProComponent', () => {
  let component: FormLoginProComponent;
  let fixture: ComponentFixture<FormLoginProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormLoginProComponent]
    });
    fixture = TestBed.createComponent(FormLoginProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
