import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicScrollerComponent } from './dynamic-scroller.component';

describe('DynamicScrollerComponent', () => {
  let component: DynamicScrollerComponent;
  let fixture: ComponentFixture<DynamicScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
