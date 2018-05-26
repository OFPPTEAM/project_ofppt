import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstagComponent } from './ajouterstag.component';

describe('AjouterstagComponent', () => {
  let component: AjouterstagComponent;
  let fixture: ComponentFixture<AjouterstagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterstagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterstagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
