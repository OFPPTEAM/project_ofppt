import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterformComponent } from './ajouterform.component';

describe('AjouterformComponent', () => {
  let component: AjouterformComponent;
  let fixture: ComponentFixture<AjouterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
