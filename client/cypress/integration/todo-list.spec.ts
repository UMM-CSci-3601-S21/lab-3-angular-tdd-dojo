import { TodoListPage } from '../support/todo-list.po';

const page = new TodoListPage();

describe('Todo list', () => {

  beforeEach(() => {
    page.navigateTo();
  });

  it('compiles and runs', () => {
    expect(2+2).to.equal(4);
  });

});
