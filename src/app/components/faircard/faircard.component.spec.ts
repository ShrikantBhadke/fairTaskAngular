import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaircardComponent } from './faircard.component';

describe('FaircardComponent', () => {
  let component: FaircardComponent;
  let fixture: ComponentFixture<FaircardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaircardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaircardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
