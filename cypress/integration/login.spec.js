/// <reference types="Cypress" />

describe("Verify Sign Up Module", () => {

    it("Should display login page", () => {
        cy.visit('https://www.rogaine.com/')
        // cy.get('.user-info>active').trigger('mouseover')
        cy.contains('Login').click({force:true})
        cy.url().should('include', 'https://www.rogaine.com/login')
    })

    it("Should fill all credential", () => {
        cy.fixture('login').then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
            cy.wait(5000)
            // cy.url().should('include', 'https://www.rogaine.com/account')
            // cy.title().should('contain', 'My Account | ROGAINE®')
        })
    })

})