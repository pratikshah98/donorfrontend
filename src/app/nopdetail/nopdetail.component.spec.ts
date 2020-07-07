import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopdetailComponent } from './nopdetail.component';

describe('NopdetailComponent', () => {
  let component: NopdetailComponent;
  let fixture: ComponentFixture<NopdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
