import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTareaComponent } from './create-tarea.component';

describe('CreateTareaComponent', () => {
  let tarea: CreateTareaComponent;
  let fixture: ComponentFixture<CreateTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTareaComponent);
    tarea = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(tarea).toBeTruthy();
  });
});
