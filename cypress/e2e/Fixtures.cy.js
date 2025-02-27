describe('MyTestSuite',( ) => {
    
    // Direct access
    it('FixtureDemoTest', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangehrm').then((data) => {

        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click();

        cy.wait(2000)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)
        })
    })
    // Access through Hook - for multiple it blocks
    before(() =>{
        cy.fixture('orangehrm').then((data) => {
            globalThis.data = data
        })
    })
    it.only('FixtureDemoTest', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click();

        cy.wait(2000)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)
    })
})