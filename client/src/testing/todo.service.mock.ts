import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/todos/todo';
import { TodoService } from 'src/app/todos/todo.service';

@Injectable()
export class MockTodoService extends TodoService {
  static testTodos: Todo[] = [];

  constructor() {
    super(null);
  }

  getTodos(): Observable<Todo[]> {
    return of(MockTodoService.testTodos);
  }
}
