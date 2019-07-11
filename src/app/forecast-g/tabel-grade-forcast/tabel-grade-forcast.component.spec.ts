import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelGradeForcastComponent } from './tabel-grade-forcast.component';

describe('TabelGradeForcastComponent', () => {
  let component: TabelGradeForcastComponent;
  let fixture: ComponentFixture<TabelGradeForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelGradeForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelGradeForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
