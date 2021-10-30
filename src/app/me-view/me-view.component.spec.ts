import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeViewComponent } from './me-view.component';

describe('MeViewComponent', () => {
  let component: MeViewComponent;
  let fixture: ComponentFixture<MeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
