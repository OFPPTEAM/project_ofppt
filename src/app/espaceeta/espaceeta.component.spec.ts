import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

=======
>>>>>>> origin/master
import { EspaceetaComponent } from './espaceeta.component';

describe('EspaceetaComponent', () => {
  let component: EspaceetaComponent;
  let fixture: ComponentFixture<EspaceetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
