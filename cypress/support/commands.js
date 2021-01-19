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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.get('#dwfrm_login_username').type(username)
  cy.wait(2000)
  cy.get('#dwfrm_login_password').type(password)
  cy.get('#dwfrm_login_rememberme').click({force:true}).should('be.checked')
  cy.get('.large').click()
})