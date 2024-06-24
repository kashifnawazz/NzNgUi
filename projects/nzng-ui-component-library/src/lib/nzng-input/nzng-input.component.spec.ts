import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzngInputComponent } from './nzng-input.component';

describe('NzngInputComponent', () => {
  let component: NzngInputComponent;
  let fixture: ComponentFixture<NzngInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NzngInputComponent]
    });
    fixture = TestBed.createComponent(NzngInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
