import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESLComponent } from './esl.component';

describe('ESLComponent', () => {
  let component: ESLComponent;
  let fixture: ComponentFixture<ESLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ESLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
