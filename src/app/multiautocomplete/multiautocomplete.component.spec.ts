import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiautocompleteComponent } from './multiautocomplete.component';

describe('MultiautocompleteComponent', () => {
  let component: MultiautocompleteComponent;
  let fixture: ComponentFixture<MultiautocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiautocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
