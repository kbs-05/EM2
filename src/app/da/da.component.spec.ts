import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAComponent } from './da.component';

describe('DAComponent', () => {
  let component: DAComponent;
  let fixture: ComponentFixture<DAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
