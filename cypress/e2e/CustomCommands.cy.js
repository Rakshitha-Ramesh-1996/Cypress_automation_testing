// click on link using label
// over writing existing contains() command
// reusuable custom command

describe('Custom commands',()=>{

it("handling links",()=>{
cy.visit('https://demo.opencart.com/');
// direct link without using custom command
//cy.get(':nth-child(1) > .product-thumb > .content > .description > h4 > a').click()
cy.wait(2000)
// using custom command
cy.clickLink("MacBook")
cy.get('h1').should('have.text','MacBook')

})

it("overwriting exisiting command",()=>{
    cy.visit('https://demo.opencart.com/');
// using custom command
    cy.clickLink("MACBOOK")
    cy.get('h1').should('have.text','MacBook')
})

it.only("Login command",()=>{
cy.visit('https://demo.opencart.com/admin/')
// Login
cy.Loginapp("demo","demo") // custom command
cy.get('h1').should("have.text","Dashboard")
})

})