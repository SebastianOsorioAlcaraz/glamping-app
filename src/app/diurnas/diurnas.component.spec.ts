import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiurnasComponent } from './diurnas.component';

describe('DiurnasComponent', () => {
  let component: DiurnasComponent;
  let fixture: ComponentFixture<DiurnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiurnasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiurnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
