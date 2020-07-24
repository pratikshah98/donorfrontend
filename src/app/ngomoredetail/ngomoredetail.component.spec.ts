import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgomoredetailComponent } from './ngomoredetail.component';

describe('NgomoredetailComponent', () => {
  let component: NgomoredetailComponent;
  let fixture: ComponentFixture<NgomoredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgomoredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgomoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
