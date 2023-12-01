import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinPageComponentComponent } from './landin-page-component.component';

describe('LandinPageComponentComponent', () => {
  let component: LandinPageComponentComponent;
  let fixture: ComponentFixture<LandinPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandinPageComponentComponent]
    });
    fixture = TestBed.createComponent(LandinPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
