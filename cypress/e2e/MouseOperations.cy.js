require('@4tw/cypress-drag-drop')
describe('Mouse Operations', () => {

    it('MouseHover', () => {
        cy.visit('https://demo.opencart.com/')
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click() // Mouse Hover
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible').click()
    })
    it('RightClick', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        
        // approach 1
        // cy.get('[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')
        // cy.get('.context-menu-icon-copy > span').should('be.visible')

        // approach 2
        cy.get('[class="context-menu-one btn btn-neutral"]').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })
    it('DoubleClick', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#field1').clear().type('Hello Raksha')
        // cy.get('#HTML10 > .widget-content > button').trigger('dblclick') // another way to do double click
        cy.get('#HTML10 > .widget-content > button').dblclick()
        cy.get('#field2').invoke('val').then((text) => { // invoke is used to get the value of the element
            cy.log("Entered text--->"+text)
        })
        cy.get('#field2').should('have.value', 'Hello Raksha')

    })
    it('DragAndDrop using plugin', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        cy.wait(2000)
        cy.get('#box6').drag('#box106',{force:true})
    })
    it.only('Scrolling page', () => {
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
        cy.get(':nth-child(79) > [align="center"] > a > img').scrollIntoView({duration: 2000})
        cy.get(':nth-child(79) > [align="center"] > a > img').should('be.visible')
        cy.get(':nth-child(5) > [align="center"] > a > img').scrollIntoView({duration: 2000})
        cy.get(':nth-child(5) > [align="center"] > a > img').should('be.visible')
    })
})
