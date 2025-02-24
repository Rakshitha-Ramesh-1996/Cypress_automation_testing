describe("Check UI elements", () => {
    it("Checking Radio buttons", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Visiblity of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        // selecting radio buttons
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
    })

    it("Checking Checkboxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Visiblity of checkboxes
        cy.get('#sunday').should('be.visible')
        cy.get('#tuesday').should('be.visible')
        cy.get('#thursday').should('be.visible')

        // selecting checkboxes
        cy.get('#sunday').check().should('be.checked')
        cy.get('#tuesday').check().should('be.checked')
        cy.get('#thursday').check().should('be.checked')

        // unselecting checkboxes
        cy.get('#sunday').uncheck().should('not.be.checked')
        cy.get('#tuesday').uncheck().should('not.be.checked')
        cy.get('#thursday').uncheck().should('not.be.checked')

        // Selecting multiple checkboxes
        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        // Select first checkbox
        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked')

        // Select last checkbox
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')
    })

})