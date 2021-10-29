import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamnetComponent } from './tournamnet.component';

describe('TournamnetComponent', () => {
  let component: TournamnetComponent;
  let fixture: ComponentFixture<TournamnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
