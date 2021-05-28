import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocturnasComponent } from './nocturnas.component';

describe('NocturnasComponent', () => {
  let component: NocturnasComponent;
  let fixture: ComponentFixture<NocturnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocturnasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NocturnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
