// go() method is used to navigate to a URL used to forward and backword in the browser history and reload the page.
describe('MySuite', () => {

    it('Navigation Test', () => {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store')
        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('h2').should('have.text', 'Cameras')
        cy.go('back')
        cy.title().should('eq', 'Your Store')
        cy.go('forward')
        cy.title().should('eq', 'Cameras')

        cy.go(-1) // home page
        cy.title().should('eq', 'Your Store')

        cy.go(1) // cameras page
        cy.title().should('eq', 'Cameras')

        cy.reload();
    })
})