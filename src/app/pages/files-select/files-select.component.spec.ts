import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesSelectComponent } from './files-select.component';

describe('FilesSelectComponent', () => {
  let component: FilesSelectComponent;
  let fixture: ComponentFixture<FilesSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesSelectComponent]
    });
    fixture = TestBed.createComponent(FilesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
