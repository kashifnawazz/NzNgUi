import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzngUiComponentLibraryComponent } from './nzng-ui-component-library.component';

describe('NzngUiComponentLibraryComponent', () => {
  let component: NzngUiComponentLibraryComponent;
  let fixture: ComponentFixture<NzngUiComponentLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NzngUiComponentLibraryComponent]
    });
    fixture = TestBed.createComponent(NzngUiComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
