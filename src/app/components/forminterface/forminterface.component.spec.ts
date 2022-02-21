import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminterfaceComponent } from './forminterface.component';

describe('ForminterfaceComponent', () => {
  let component: ForminterfaceComponent;
  let fixture: ComponentFixture<ForminterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForminterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
