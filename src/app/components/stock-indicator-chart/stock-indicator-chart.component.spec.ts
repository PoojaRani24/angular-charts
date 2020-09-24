import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIndicatorChartComponent } from './stock-indicator-chart.component';

describe('StockIndicatorChartComponent', () => {
  let component: StockIndicatorChartComponent;
  let fixture: ComponentFixture<StockIndicatorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockIndicatorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockIndicatorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
