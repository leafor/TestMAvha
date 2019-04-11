import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTareasComponent } from './search-tareas.component';

describe('SearchTareasComponent', () => {
  let component: SearchTareasComponent;
  let fixture: ComponentFixture<SearchTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
