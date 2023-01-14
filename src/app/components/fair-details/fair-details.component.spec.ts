import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairDetailsComponent } from './fair-details.component';

describe('FairDetailsComponent', () => {
  let component: FairDetailsComponent;
  let fixture: ComponentFixture<FairDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
