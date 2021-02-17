export class TodoListPage {
  navigateTo() {
    return cy.visit('/todos');
  }

  getTodoTitle() {
    return cy.get('.todo-list-title');
  }

}
