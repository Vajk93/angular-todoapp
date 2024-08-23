import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToDoComponent } from './ng-to-do.component';

describe('NgToDoComponent', () => {
  let component: NgToDoComponent;
  let fixture: ComponentFixture<NgToDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgToDoComponent]
    });
    fixture = TestBed.createComponent(NgToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
