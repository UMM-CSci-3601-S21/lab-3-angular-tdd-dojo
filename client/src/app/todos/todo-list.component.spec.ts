import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { MockTodoService } from '../../testing/todo.service.mock';

describe('TodoListComponent', () => {
  let todoList: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  /*
   * This configures the `TestBed` that creates and connects
   * the various objects that will play a role in the tests.
   *
   * The `compileComponents()` step (which does things like
   * converting the "Angularized" HTML to "real" HTML) can
   * take a while, and is thus an asynchronous call. We need
   * to wait for it's work to be done before we move on and
   * try to _use_ the components, however, so it's
   * wrapped in a `waitForAsync()`.
   *
   * The `declarations` field lists everything that should
   * be "compiled" as part of these tests; you essentially
   * list everything you want to test in these tests.
   *
   * The `providers` field lists any services, etc., that
   * need to be provided for these tests to work. Pretty
   * much anything that is injected (a private argument
   * in the constructor) into any of your objects under
   * test (`TodoComponent` here) will need to have an
   * entry in the `providers` list. Sometimes that can be
   * just be that class if it's OK to use that class
   * "as is". Often, however, those need to be mocked.
   * Here we use a `MockTodoService` class that is
   * defined in `../../testing/todo.service.mock.ts`.
   */
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: TodoService, useClass: MockTodoService}],
    }).compileComponents();
  }));

  /*
   * At this point all the components are compiled, so we
   * use the `TestBed` to create an `ComponentFixture` that
   * gives us an instance of the component we're testing.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    todoList = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(todoList).toBeTruthy();
  });
});
