import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IJCLComponent } from './ijcl.component';

describe('IJCLComponent', () => {
  let component: IJCLComponent;
  let fixture: ComponentFixture<IJCLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IJCLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IJCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
