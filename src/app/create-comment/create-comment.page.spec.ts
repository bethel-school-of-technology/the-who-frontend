import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentPage } from './create-comment.page';

describe('CreateCommentPage', () => {
  let component: CreateCommentPage;
  let fixture: ComponentFixture<CreateCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
