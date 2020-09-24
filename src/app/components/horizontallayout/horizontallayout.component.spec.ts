import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontallayoutComponent } from './horizontallayout.component';

describe('HorizontallayoutComponent', () => {
  let component: HorizontallayoutComponent;
  let fixture: ComponentFixture<HorizontallayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontallayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontallayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
