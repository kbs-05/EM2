import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EILComponent } from './eil.component';

describe('EILComponent', () => {
  let component: EILComponent;
  let fixture: ComponentFixture<EILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EILComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
