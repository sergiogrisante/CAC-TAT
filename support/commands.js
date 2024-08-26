Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Sérgio')
    cy.get('#lastName').type('Grisante')
    cy.get('#email').type('sergiogrisante@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button').click()
})

Cypress.Commands.add('Login', function() {
    cy.get('#auth__login_form__username').type('SergioG')
    cy.get('#auth__login_form__step1_next_btn').click()
    cy.get('#auth__login_form__password').type('Silvac77$$')
    cy.get('#auth__login_form__step2_next_btn').click()
    
    
})

