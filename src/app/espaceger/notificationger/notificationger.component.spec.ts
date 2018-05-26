import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationgerComponent } from './notificationger.component';

describe('NotificationgerComponent', () => {
  let component: NotificationgerComponent;
  let fixture: ComponentFixture<NotificationgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
