import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedRouterOutletsComponent } from './named-router-outlets.component';

describe('NamedRouterOutletsComponent', () => {
  let component: NamedRouterOutletsComponent;
  let fixture: ComponentFixture<NamedRouterOutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedRouterOutletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedRouterOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
