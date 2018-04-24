import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixetablisementComponent } from './choixetablisement.component';

describe('ChoixetablisementComponent', () => {
  let component: ChoixetablisementComponent;
  let fixture: ComponentFixture<ChoixetablisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixetablisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixetablisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
