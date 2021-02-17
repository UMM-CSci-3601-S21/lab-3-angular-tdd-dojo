export class TodoListPage {
  navigateTo() {
    return cy.visit('/todos');
  }

  getTodoTitle() {
    return cy.get('.user-list-title');
  }

}
