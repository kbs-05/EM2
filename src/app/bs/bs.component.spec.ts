import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSComponent } from './bs.component';

describe('BSComponent', () => {
  let component: BSComponent;
  let fixture: ComponentFixture<BSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
