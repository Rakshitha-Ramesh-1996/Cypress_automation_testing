describe('Handling Tabs', () => {
    it('Appracoh 1: Using the URL', () => {
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab
        cy.get('.example >a').invoke('removeAttr', 'target').click() // remove target attribute
        cy.url().should('include', '/windows/new') // child tab

        cy.wait(4000); // wait for 4 seconds
        cy.go('back') // parent tab
        cy.url().should('include', '/windows') // parent tab
    })

    it.only('Appracoh 2: Using the URL', () => {
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab
        cy.get('.example >a').then((ele)=> {
            const url = ele.prop('href') // get the href attribute
            cy.visit(url)
        })
        cy.url().should('include', '/windows/new') // child tab
        cy.wait(4000); // wait for 4 seconds
        cy.go('back') // parent tab
        cy.url().should('include', '/windows') // parent tab
        
    })
})