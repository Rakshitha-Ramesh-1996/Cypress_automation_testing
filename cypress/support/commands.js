// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
///<reference types="cypress-xpath" />

Cypress.Commands.add('getIframe', (iframe) => {
return cy.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap);
})

// custom command for clicking on link using label
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label, { matchCase: false }).click(); // it will aviod case sensitive if we remove matchcase it will match with case sensetivie
})

//over write contains method - its not working
Cypress.Commands.add('Mycontains',(originalFn, subject, filter, text, options = {})=>{
    // determine if a filter argument was passed
    if(typeof text == 'object'){
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false
    return originalFn(subject, filter, text, options)
}) 

// custom command for Login
Cypress.Commands.add('Loginapp',(email,password)=>{

    cy.get('#input-username').clear().type('demo')
    cy.get('#input-password').clear().type('demo')
    cy.get('[type="submit"]').click();
})
  