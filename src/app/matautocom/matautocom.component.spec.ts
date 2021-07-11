import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatautocomComponent } from './matautocom.component';

describe('MatautocomComponent', () => {
  let component: MatautocomComponent;
  let fixture: ComponentFixture<MatautocomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatautocomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatautocomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
