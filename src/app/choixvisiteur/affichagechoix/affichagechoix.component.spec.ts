import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagechoixComponent } from './affichagechoix.component';

describe('AffichagechoixComponent', () => {
  let component: AffichagechoixComponent;
  let fixture: ComponentFixture<AffichagechoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagechoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagechoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
