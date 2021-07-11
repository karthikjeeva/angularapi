import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatautoobjectComponent } from './matautoobject.component';

describe('MatautoobjectComponent', () => {
  let component: MatautoobjectComponent;
  let fixture: ComponentFixture<MatautoobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatautoobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatautoobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
