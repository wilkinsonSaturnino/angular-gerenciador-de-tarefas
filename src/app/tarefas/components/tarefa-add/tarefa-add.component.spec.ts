import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaAddComponent } from './tarefa-add.component';

describe('TarefaAddComponent', () => {
  let component: TarefaAddComponent;
  let fixture: ComponentFixture<TarefaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    /*fixture = TestBed.createComponent(TarefaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); */
  });

});
