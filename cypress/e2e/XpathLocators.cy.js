describe ('XpathLocators', () => {
    it('find no of products', () => {
       cy.visit('http://www.automationpractice.pl/index.php')
         cy.xpath("//a[contains(text(),'Best Sellers')]").click()
         cy.xpath('//ul[@id="blockbestsellers"]//li').should('have.length', 6)

    })

    it('chained xpath', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
          cy.xpath("//a[contains(text(),'Best Sellers')]").click()
          cy.xpath('//ul[@id="blockbestsellers"]').xpath("./li").should('have.length', 6)
 
     })
})