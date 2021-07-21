import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatautotriggerComponent } from './matautotrigger.component';

describe('MatautotriggerComponent', () => {
  let component: MatautotriggerComponent;
  let fixture: ComponentFixture<MatautotriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatautotriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatautotriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
