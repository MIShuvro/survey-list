import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeServeyComponent } from './take-servey.component';

describe('TakeServeyComponent', () => {
  let component: TakeServeyComponent;
  let fixture: ComponentFixture<TakeServeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeServeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
