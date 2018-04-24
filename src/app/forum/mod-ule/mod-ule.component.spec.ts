import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModUleComponent } from './mod-ule.component';

describe('ModUleComponent', () => {
  let component: ModUleComponent;
  let fixture: ComponentFixture<ModUleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModUleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModUleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
