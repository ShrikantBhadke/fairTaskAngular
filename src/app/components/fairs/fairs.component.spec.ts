import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsComponent } from './fairs.component';

describe('FairsComponent', () => {
  let component: FairsComponent;
  let fixture: ComponentFixture<FairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
