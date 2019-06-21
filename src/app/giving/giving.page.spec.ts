import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingPage } from './giving.page';

describe('GivingPage', () => {
  let component: GivingPage;
  let fixture: ComponentFixture<GivingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
