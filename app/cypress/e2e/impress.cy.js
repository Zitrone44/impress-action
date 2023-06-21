describe('template spec', () => {
  it('passes', () => {
    console.log('ENV', Cypress.env())
//    cy.viewport(2999, 2999)
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('PRESENTATION_URL'))
    for (let i = 0; i < 10; i++) {
        cy.screenshot({ capture: 'viewport' })
        cy.get('body').trigger('keydown', { keyCode: 39, force: true });
        cy.wait(500);
        cy.get('body').trigger('keyup', { keyCode: 39, force: true });
        cy.wait(2000);
    }
  })
})
