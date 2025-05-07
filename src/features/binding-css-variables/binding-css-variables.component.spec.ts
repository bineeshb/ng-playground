import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCssVariablesComponent } from './binding-css-variables.component';

describe('BindingCssVariablesComponent', () => {
  let component: BindingCssVariablesComponent;
  let fixture: ComponentFixture<BindingCssVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingCssVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingCssVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
