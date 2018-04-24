import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacedepComponent } from './espacedep.component';

describe('EspacedepComponent', () => {
  let component: EspacedepComponent;
  let fixture: ComponentFixture<EspacedepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacedepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
