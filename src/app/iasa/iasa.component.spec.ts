import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IASAComponent } from './iasa.component';

describe('IASAComponent', () => {
  let component: IASAComponent;
  let fixture: ComponentFixture<IASAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IASAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IASAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
