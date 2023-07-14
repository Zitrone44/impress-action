function recursiveContinue(startHash, i) {
    cy.screenshot(`screenshot-${i.toString().padStart(4, '0')}.png`, { capture: 'viewport' })
    cy.get('body').trigger('keydown', { keyCode: 39, force: true });
    cy.wait(500);
    cy.get('body').trigger('keyup', { keyCode: 39, force: true });
    cy.wait(2000);
    cy.hash().then((currentHash) => {
        if (startHash !== currentHash) {
            recursiveContinue(startHash, i+1);
        }
    })
}

describe('template spec', () => {
    it('passes', () => {
        console.log('ENV', Cypress.env())
        cy.viewport(1800, 1000)
        cy.visit(Cypress.env('PRESENTATION_URL'))
        cy.wait(5000);
        cy.hash().then((startHash) => {
            recursiveContinue(startHash, 0)
        })
    });
});
