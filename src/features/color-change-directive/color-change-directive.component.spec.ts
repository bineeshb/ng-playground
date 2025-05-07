import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangeDirectiveComponent } from './color-change-directive.component';

describe('ColorChangeDirectiveComponent', () => {
  let component: ColorChangeDirectiveComponent;
  let fixture: ComponentFixture<ColorChangeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorChangeDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorChangeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
