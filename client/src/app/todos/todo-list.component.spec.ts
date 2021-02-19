import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { MockTodoService } from '../../testing/todo.service.mock';

describe('TodoListComponent', () => {
  let todoList: TodoListComponent;
  let todoService: TodoService;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoListComponent,
        { provide: TodoService, useClass: MockTodoService }
      ]
    });
    todoList = TestBed.inject(TodoListComponent);
    todoService = TestBed.inject(TodoService);
  });

  it('should create', () => {
    expect(todoList).toBeTruthy();
  });
});
