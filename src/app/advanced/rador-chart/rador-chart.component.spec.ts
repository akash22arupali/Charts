import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadorChartComponent } from './rador-chart.component';

describe('RadorChartComponent', () => {
  let component: RadorChartComponent;
  let fixture: ComponentFixture<RadorChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadorChartComponent]
    });
    fixture = TestBed.createComponent(RadorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
