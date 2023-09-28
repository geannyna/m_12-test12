import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArticulosComponent } from './form-articulos.component';

describe('FormArticulosComponent', () => {
  let component: FormArticulosComponent;
  let fixture: ComponentFixture<FormArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormArticulosComponent]
    });
    fixture = TestBed.createComponent(FormArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
