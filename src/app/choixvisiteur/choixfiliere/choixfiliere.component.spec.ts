import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixfiliereComponent } from './choixfiliere.component';

describe('ChoixfiliereComponent', () => {
  let component: ChoixfiliereComponent;
  let fixture: ComponentFixture<ChoixfiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixfiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixfiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
