import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStagComponent } from './list-stag.component';

describe('ListStagComponent', () => {
  let component: ListStagComponent;
  let fixture: ComponentFixture<ListStagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
