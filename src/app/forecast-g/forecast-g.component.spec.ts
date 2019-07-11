import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastGComponent } from './forecast-g.component';

describe('ForecastGComponent', () => {
  let component: ForecastGComponent;
  let fixture: ComponentFixture<ForecastGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
