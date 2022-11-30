
Cypress.Commands.add("verifyErrorText", (element, errorMessage) => {
    cy.get(element).should('include.text', errorMessage)
})

Cypress.Commands.add("verifyCurrentURL", (url) => {
    cy.url().should('eq', url)
})