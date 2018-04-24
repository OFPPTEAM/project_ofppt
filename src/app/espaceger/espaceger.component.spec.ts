import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacegerComponent } from './espaceger.component';

describe('EspacegerComponent', () => {
  let component: EspacegerComponent;
  let fixture: ComponentFixture<EspacegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
