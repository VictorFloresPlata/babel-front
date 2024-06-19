import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCommicsComponent } from './listar-commics.component';

describe('ListarCommicsComponent', () => {
  let component: ListarCommicsComponent;
  let fixture: ComponentFixture<ListarCommicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCommicsComponent]
    });
    fixture = TestBed.createComponent(ListarCommicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
