import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrerstagComponent } from './filtrerstag.component';

describe('FiltrerstagComponent', () => {
  let component: FiltrerstagComponent;
  let fixture: ComponentFixture<FiltrerstagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrerstagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrerstagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
