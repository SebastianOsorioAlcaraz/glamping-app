import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalComponent } from './postal.component';

describe('PostalComponent', () => {
  let component: PostalComponent;
  let fixture: ComponentFixture<PostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
