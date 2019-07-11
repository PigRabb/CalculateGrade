import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GTabelComponent } from './g-tabel.component';

describe('GTabelComponent', () => {
  let component: GTabelComponent;
  let fixture: ComponentFixture<GTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
