import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IEJComponent } from './iej.component';

describe('IEJComponent', () => {
  let component: IEJComponent;
  let fixture: ComponentFixture<IEJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IEJComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IEJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
